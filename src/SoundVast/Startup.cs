using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SoundVast.CustomHelpers;
using SoundVast.Data;
using SoundVast.Models;
using SoundVast.Models.CommentModels;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Repository;
using SoundVast.ServiceLayer;
using SoundVast.Services;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Http;

namespace SoundVast
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.CookieName = ".SoundVast";
            });

            services.AddMvc();
            services.AddCloudscribePagination();

            var azureConfig = new AzureConfig();

            // Add application services.
            services.AddSingleton<IAzureConfig>(azureConfig);
            services.AddSingleton(new AutoMapperConfiguration(azureConfig));
            services.AddSingleton(new ModelStateDictionary());
            services.AddSingleton(AutoMapperConfiguration.Config.CreateMapper());

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddScoped<IValidationDictionary, ModelStateWrapper>();
            services.AddScoped<IRepository<Audio>, Repository<Audio, ApplicationDbContext>>();
            services.AddScoped<IRepository<Playlist>, Repository<Playlist, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStream>, Repository<FileStream, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamGenre>, Repository<FileStreamGenre, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamCategory>, Repository<FileStreamCategory, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamReport>, Repository<FileStreamReport, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamRating>, Repository<FileStreamRating, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStream>, Repository<LiveStream, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamGenre>, Repository<LiveStreamGenre, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamCategory>, Repository<LiveStreamCategory, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamReport>, Repository<LiveStreamReport, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamRating>, Repository<LiveStreamRating, ApplicationDbContext>>();
            services.AddScoped<IRepository<Comment>, Repository<Comment, ApplicationDbContext>>();
            services.AddScoped<IRepository<CommentRating>, Repository<CommentRating, ApplicationDbContext>>();
            services.AddScoped<IRepository<CommentReport>, Repository<CommentReport, ApplicationDbContext>>();
            services.AddScoped<IRepository<Link>, Repository<Link, ApplicationDbContext>>();
            services.AddScoped<IRepository<Quote>, Repository<Quote, ApplicationDbContext>>();
            services.AddScoped<IAudioService<Audio>, AudioService<Audio>>();
            services.AddScoped<IPlaylistService, PlaylistService>();
            services.AddScoped<IFileStreamService, FileStreamService>();
            services.AddScoped<IGenreService<FileStreamGenre>, GenreService<FileStreamGenre>>();
            services.AddScoped<ICategoryService<FileStreamCategory>, CategoryService<FileStreamCategory>>();
            services.AddScoped<IReportService<FileStreamReport>, ReportService<FileStreamReport>>();
            services.AddScoped<IRatingService<FileStreamRating>, RatingService<FileStreamRating>>();
            services.AddScoped<ILiveStreamService, LiveStreamService>();
            services.AddScoped<IGenreService<LiveStreamGenre>, GenreService<LiveStreamGenre>>();
            services.AddScoped<ICategoryService<LiveStreamCategory>, CategoryService<LiveStreamCategory>>();
            services.AddScoped<IReportService<LiveStreamReport>, ReportService<LiveStreamReport>>();
            services.AddScoped<IRatingService<LiveStreamRating>, RatingService<LiveStreamRating>>();
            services.AddScoped<ICommentService, CommentService>();
            services.AddScoped<IRatingService<CommentRating>, RatingService<CommentRating>>();
            services.AddScoped<IReportService<CommentReport>, ReportService<CommentReport>>();
            services.AddScoped<IQuoteService, QuoteService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            var token = Configuration.GetSection("ConnectionStrings:StorageConnectionString");

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseIdentity();

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715
            app.SeedData();
            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "default_2",
                    "{controller=FileStream}/{action=FileStreams}/{id?}");
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "default",
                    "{controller=FileStream}/{action=FileStreams}/{genre?}/{category=Song}/{pageNumber=1}");
            });
        }
    }
}
