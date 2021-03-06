﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Newtonsoft.Json;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Flag.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Tag;
using SoundVast.Components.Upload;
using SoundVast.Validation;
using GraphQL.Server.Transports.AspNetCore;
using GraphQL.Server.Transports.WebSockets;
using GraphQL.Server.Transports.Subscriptions.Abstractions;
using SoundVast.Utilities;
using SoundVast.Components.Dirble;
using System.Threading.Tasks;

namespace SoundVast
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _env;

        public Startup(IConfiguration configuration, ILoggerFactory loggerFactory, IHostingEnvironment env)
        {
            _configuration = configuration;
            loggerFactory.CreateLogger<Startup>();
            _env = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));
            services.AddHangfire(x => x.UseSqlServerStorage(_configuration.GetConnectionString("DefaultConnection")));
            services.AddApplicationInsightsTelemetry(_configuration["ApplicationInsights:InstrumentationKey"]);
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 0;
                    // Allow all characters
                    options.User.AllowedUserNameCharacters = string.Empty;
                    options.User.RequireUniqueEmail = true;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.Cookie.Name = ".SoundVast";
            });

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });

            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromMinutes(30);
            });
            services.AddGraphQLHttp();
            services.AddGraphQLWebSocket<AppSchema>();
            services.Configure<ExecutionOptions<AppSchema>>(options =>
            {
                options.EnableMetrics = true;
                options.ExposeExceptions = true;
            });
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling =
                ReferenceLoopHandling.Ignore);
            services.AddMemoryCache();

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
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    ConfigFile = "./webpack.config.js"
                });
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            var options = new RewriteOptions();

            options.AddRedirectToHttps();

            async Task<object> BuildUserContext(HttpContext c)
            {
                var userManager = app.ApplicationServices.GetRequiredService<UserManager<ApplicationUser>>();
                var currentUser = await userManager.GetUserAsync(c.User);

                return new Context
                {
                    CurrentUser = currentUser,
                    HttpContext = c
                };
            }

            app.UseRewriter(options);
            app.UseHangfireServer();
            app.UseHangfireDashboard();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseSession();
            app.UseWebSockets();
            app.UseGraphQLWebSocket<AppSchema>(new GraphQLWebSocketsOptions());
            app.UseGraphQLHttp<AppSchema>(new GraphQLHttpOptions() { BuildUserContext = BuildUserContext });

            RecurringJob.AddOrUpdate<IGenreService>(x => x.UpdateCoverImages(), Cron.Daily);

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
            var storageConnectionString = _configuration.GetConnectionString("StorageConnectionString");
            var azureStorage = new AzureStorage(storageConnectionString);
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

                    return (IValidator)service;
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
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(InterfaceGraphType<>));
            builder.RegisterAssemblyTypes(assembly).AsClosedTypesOf(typeof(MutationPayloadGraphType<,>));
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Service")).AsImplementedInterfaces();
            builder.RegisterAssemblyTypes(assembly).Where(x => x.Name.EndsWith("Validator")).AsImplementedInterfaces();

            builder.RegisterType<AppQuery>();
            builder.RegisterType<AppMutation>();
            builder.RegisterType<AppSubscription>();
            builder.RegisterType<ValidationProvider>().As<IValidationProvider>().InstancePerLifetimeScope();
            builder.RegisterType<AuthMessageSender>().As<IEmailSender>();
            builder.RegisterType<AuthMessageSender>().As<ISmsSender>();
            builder.RegisterType<AudioService<Audio>>().AsImplementedInterfaces();
            builder.RegisterType<Repository<Rating, ApplicationDbContext>>().As<IRepository<Rating>>();
            builder.RegisterType<Repository<Audio, ApplicationDbContext>>().As<IRepository<Audio>>();
            builder.RegisterType<Repository<LiveStream, ApplicationDbContext>>().As<IRepository<LiveStream>>();
            builder.RegisterType<Repository<Genre, ApplicationDbContext>>().As<IRepository<Genre>>();
            builder.RegisterType<Repository<Quote, ApplicationDbContext>>().As<IRepository<Quote>>();
            builder.RegisterType<Repository<Comment, ApplicationDbContext>>().As<IRepository<Comment>>();
            builder.RegisterType<Repository<Flag, ApplicationDbContext>>().As<IRepository<Flag>>();
            builder.RegisterType<Repository<Tag, ApplicationDbContext>>().As<IRepository<Tag>>();
            builder.RegisterType<Repository<StreamData, ApplicationDbContext>>().As<IRepository<StreamData>>();
            builder.RegisterType<LogMessagesListener>().As<IOperationMessageListener>().SingleInstance();
            builder.RegisterType<Dirble>().As<IDirble>();

            return builder;
        }
    }
}
