using System;
using System.Collections;
using System.Collections.Generic;
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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Options;
using SoundVast.Components;
using SoundVast.Components.User;
using System.Text.RegularExpressions;
using Autofac;
using Autofac.Core;
using Autofac.Extensions.DependencyInjection;
using Autofac.Features.ResolveAnything;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Hangfire;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.Twitter;
using Newtonsoft.Json;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Flag.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.Upload;
using SoundVast.Validation;

namespace SoundVast
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration, ILoggerFactory loggerFactory)
        {
            _configuration = configuration;
            loggerFactory.CreateLogger<Startup>();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));
         //   services.AddHangfire(x => x.UseSqlServerStorage(_configuration.GetConnectionString("DefaultConnection")));

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
                options.Cookie.Name = ".SoundVast";
            });
           
            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromMinutes(30);
            });

            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling =
                ReferenceLoopHandling.Ignore);
            services.AddMemoryCache();
            //  services.AddGraphQLHttpTransport<AppSchema>();
            // services.AddGraphQLWebSocketsTransport<AppSchema>();
            // services.AddGraphQL();

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(o => o.LoginPath = new PathString("/login"))
                .AddFacebook(o =>
                {
                    o.AppId = _configuration["OAuth:Facebook:Id"];
                    o.AppSecret = _configuration["OAuth:Facebook:Secret"];
                    o.Scope.Add("email");
                }).AddTwitter(o =>
                {
                    o.ConsumerKey = _configuration["OAuth:Twitter:Id"];
                    o.ConsumerSecret = _configuration["OAuth:Twitter:Secret"];
                    o.RetrieveUserDetails = true;
                }).AddGoogle(o =>
                {
                    o.ClientId = _configuration["OAuth:Google:Id"];
                    o.ClientSecret = _configuration["OAuth:Google:Secret"];
                    o.Scope.Add("email");
                });

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

         //   app.UseHangfireServer();
         //   app.UseHangfireDashboard();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseSession();
            //   app.UseWebSockets();
            //  app.UseGraphQLEndPoint<AppSchema>("/graphql");

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "app",
                    "{controller}/{action}"
                );

                routes.MapRoute(
                    "externalLoginCallback",
                    "Account/externalLoginCallback/{returnUrl}"
                );

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
                    var genericType = typeof(Validator<>);
                    var baseValType = genericType.MakeGenericType(type.BaseType);
                    var valType = genericType.MakeGenericType(type);

                    var service = context.ResolveOptional(valType) ?? context.ResolveOptional(baseValType);

                    return (IValidator) service;
                };
            });

            builder.Register(x => _configuration).As<IConfiguration>().SingleInstance();
            builder.Register(x => azureStorage).As<ICloudStorage>().SingleInstance();
            builder.Register(x =>
            {
                var context = x.Resolve<IComponentContext>();

                return new AppSchema(t =>
                {
                    var type = context.ResolveOptional(t);
                    var resolvedType = type ?? Activator.CreateInstance(t);

                    return resolvedType.As<IGraphType>();
                });
            });

            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(NodeGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(ObjectGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(Validator<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(MutationPayloadGraphType<,>));
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces();
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Validator")).AsImplementedInterfaces();

            builder.RegisterType<AppQuery>();
            builder.RegisterType<AppMutation>();
            builder.RegisterType<FileStorage>().As<IFileStorage>().SingleInstance();
            builder.RegisterType<ValidationProvider>().As<IValidationProvider>().InstancePerLifetimeScope();
            builder.RegisterType<AuthMessageSender>().As<IEmailSender>();
            builder.RegisterType<AuthMessageSender>().As<ISmsSender>();
            builder.RegisterType<AzureBlob>().As<ICloudBlob>();
            builder.RegisterType<AudioService<Audio>>().AsImplementedInterfaces();
            builder.RegisterType<RatingService<Audio>>().AsImplementedInterfaces();
            builder.RegisterType<RatingService<Comment>>().AsImplementedInterfaces();
            builder.RegisterType<Repository<Audio, ApplicationDbContext>>().As<IRepository<Audio>>();
            builder.RegisterType<Repository<Song, ApplicationDbContext>>().As<IRepository<Song>>();
            builder.RegisterType<Repository<LiveStream, ApplicationDbContext>>().As<IRepository<LiveStream>>();
            builder.RegisterType<Repository<Genre, ApplicationDbContext>>().As<IRepository<Genre>>();
            builder.RegisterType<Repository<SongGenre, ApplicationDbContext>>().As<IRepository<SongGenre>>();
            builder.RegisterType<Repository<LiveStreamGenre, ApplicationDbContext>>().As<IRepository<LiveStreamGenre>>();
            builder.RegisterType<Repository<Quote, ApplicationDbContext>>().As<IRepository<Quote>>();
            builder.RegisterType<Repository<Comment, ApplicationDbContext>>().As<IRepository<Comment>>();
            builder.RegisterType<Repository<Flag, ApplicationDbContext>>().As<IRepository<Flag>>();
            builder.RegisterType<Repository<Playlist, ApplicationDbContext>>().As<IRepository<Playlist>>();
            builder.RegisterType<Repository<AudioPendingEdit, ApplicationDbContext>>().As<IRepository<AudioPendingEdit>>();
            builder.RegisterType<Repository<SongPendingEdit, ApplicationDbContext>>().As<IRepository<SongPendingEdit>>();
            builder.RegisterType<Repository<LiveStreamPendingEdit, ApplicationDbContext>>().As<IRepository<LiveStreamPendingEdit>>();

            return builder;
        }
    }
}
