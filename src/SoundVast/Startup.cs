using System;
using System.Collections;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SoundVast.Data;
using SoundVast.Repository;
using SoundVast.Services;
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Storage.FileStorage;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Options;
using SoundVast.Components;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Category;
using SoundVast.Components.Comment;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.FileStream;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Playlist;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Quote;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Report;
using SoundVast.Components.User;
using System.Text.RegularExpressions;
using Autofac;
using Autofac.Core;
using Autofac.Extensions.DependencyInjection;
using Newtonsoft.Json;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Upload;
using SoundVast.Validation;

namespace SoundVast
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;

        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            _configuration = builder.Build();
            _logger = loggerFactory.CreateLogger<Startup>();

            JobScheduler.Start();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 0;
                    // Allow all characters
                    options.User.AllowedUserNameCharacters = string.Empty;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.CookieName = ".SoundVast";
            });
           
            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromMinutes(30);
            });

            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling =
                ReferenceLoopHandling.Ignore);
            services.AddCloudscribePagination();
            services.AddMemoryCache();
            //services.AddAutoMapper();

            var builder = RegisterServices();

            builder.Populate(services);

            var container = builder.Build();

            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    ConfigFile = "./webpack.config.js"
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            RegisterSocialLogins(app);

            app.UseStaticFiles();
            app.UseIdentity();
            app.SeedData();
            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "app",
                    "{controller}/{action}"
                );
            });

            app.UseMvc(routes =>
            {
                routes.MapSpaFallbackRoute(
                    "default",
                    new
                    {
                        controller = "App",
                        action = "Index"
                    }
                );
            });
        }

        private ContainerBuilder RegisterServices()
        {
            var azureStorage = new AzureStorage(_configuration);
            var builder = new ContainerBuilder();
            var assembly = Assembly.GetExecutingAssembly();

            builder.Register<Func<Type, IValidator>>(x =>
            {
                var context = x.Resolve<IComponentContext>();

                return type =>
                {
                    var valType = typeof(Validator<>).MakeGenericType(type);

                    return (IValidator)context.Resolve(valType);
                };
            });

            builder.Register(x => _configuration).As<IConfiguration>().SingleInstance();
            builder.Register(x => azureStorage).As<ICloudStorage>().SingleInstance();

            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(Validator<>));
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces();
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Validator")).AsImplementedInterfaces();

            builder.RegisterType<FileStorage>().As<IFileStorage>().SingleInstance();
            builder.RegisterType<ValidationProvider>().As<IValidationProvider>().SingleInstance();
            builder.RegisterType<AuthMessageSender>().As<IEmailSender>();
            builder.RegisterType<AuthMessageSender>().As<ISmsSender>();
            builder.RegisterType<AzureBlob>().As<ICloudBlob>();
            builder.RegisterType<Repository<AudioModel, ApplicationDbContext>>().As<IRepository<AudioModel>>();
            builder.RegisterType<Repository<GenreModel, ApplicationDbContext>>().As<IRepository<GenreModel>>();

            return builder;
        }

        private void RegisterSocialLogins(IApplicationBuilder app)
        {
            var faceBookSecret = _configuration["OAuth:Facebook:Secret"];
            var twitterSecret = _configuration["OAuth:Twitter:Secret"];
            var googleSecret = _configuration["OAuth:Google:Secret"];

            if (faceBookSecret != null)
            {
                app.UseFacebookAuthentication(new FacebookOptions
                {
                    AppId = _configuration["OAuth:Facebook:Id"],
                    AppSecret = faceBookSecret
                });
            }
            else
            {
                _logger.LogWarning("FaceBook OAuth not setup because the Facebook secret is null");
            }

            if (twitterSecret != null)
            {
                app.UseTwitterAuthentication(new TwitterOptions
                {
                    ConsumerKey = _configuration["OAuth:Twitter:Id"],
                    ConsumerSecret = twitterSecret
                });
            }
            else
            {
                _logger.LogWarning("Twitter OAuth not setup because the Twitter secret is null");
            }

            if (googleSecret != null)
            {
                app.UseGoogleAuthentication(new GoogleOptions
                {
                    ClientId = _configuration["OAuth:Google:Id"],
                    ClientSecret = googleSecret
                });
            }
            else
            {
                _logger.LogWarning("Google OAuth not setup because the Google secret is null");
            }
        }
    }
}
