using System;
using System.Collections.Generic;
using System.Linq;
using System.Globalization;
using System.Collections;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.DependencyInjection;
using SoundVast.Components.Category.Models;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Image.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.CustomHelpers;
using SoundVast.Properties;

namespace SoundVast.Data
{
    public static class DataSeeder
    {
        // Todo: Move this code when seed data is implemented in EF 7
        /// <summary>
        /// This is a workaround for missing seed data functionality in EF 7.0-rc1
        /// More info: https://github.com/aspnet/EntityFramework/issues/629
        /// </summary>
        /// <param name="app">
        /// An instance that provides the mechanisms to get instance of the database context.
        /// </param>
        public static void SeedData(this IApplicationBuilder app)
        {
            using (var context = app.ApplicationServices.GetService<ApplicationDbContext>())
            {
                context.Database.Migrate();

                var musicGenres = MusicGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                var radioStationCategoryResources = LiveStreamCategories.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                var placeHolderImage = new ImageFileModel("Placeholder.jpg");

                InitializeGenres(context, musicGenres);

             //   InitializeQuotes(context);
             //   InitializeCategories<FileStreamCategoryModel>(context, fileStreamCategoryResources, placeHolderImage);
             //   InitializeCategories<LiveStreamCategoryModel>(context, radioStationCategoryResources, placeHolderImage);
                //InitializeIdentityForEf(context);

                context.SaveChanges();
            }
        }

        private static void InitializeQuotes(ApplicationDbContext context)
        {
            var quoteResources = Quotes.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
            var quotes = quoteResources.Select(x => new QuoteModel { Quotation = (string)x.Value });

            //context.Quotes.AddRange(quotes.Where(quote => !context.Quotes.Any(x => x.Quotation == quote.Quotation)));
        }

        public static void InitializeCategories<T>(ApplicationDbContext context, DictionaryEntry[] categoryResources, ImageFileModel imageFile)
                where T : CategoryModel
        {
            var categories = categoryResources.Select(x => (T)Activator.CreateInstance(typeof(T), new object[] { x.Value, imageFile }));

            context.Set<T>().AddRange(categories.Where(category => !context.Set<T>().Any(x => x.Name == category.Name)));
        }

        public static void InitializeGenres(ApplicationDbContext context, DictionaryEntry[] genreResources)
        {
            var musicGenres = genreResources.Select(x => new GenreModel
            {
                Name = (string)x.Value,
                GenreType = nameof(GenreType.Song)
            });

            context.Set<GenreModel>().AddRange(musicGenres.Where(genre => !context.Set<GenreModel>().Any(x => x.Name == genre.Name)));
        }

        //public static void InitializeIdentityForEf(ApplicationDbContext context)
        //{
        //    //If we are running through a commandline then don't execute because there is no HttpContext.Current
        //    if (HttpContext.Current == null)
        //        return;

        //    var userManager = HttpContext.Current.GetOwinContext().GetUserManager<UserManager<>>();
        //    var roleManager = HttpContext.Current.GetOwinContext().Get<ApplicationRoleManager>();
        //    const string name = "Yoshimiii";
        //    const string email = "martino1995@blueyonder.co.uk";
        //    const string password = "***REMOVED***";
        //    const string roleName = "Admin";

        //    //Create Role Admin if it does not exist
        //    var role = roleManager.FindByName(roleName);
        //    if (role == null)
        //    {
        //        role = new IdentityRole(roleName);
        //        var roleresult = roleManager.Create(role);
        //    }

        //    var user = userManager.FindByName(name);
        //    if (user == null)
        //    {
        //        user = new User { UserName = name, Email = email };
        //        var result = userManager.Create(user, password);
        //        result = userManager.SetLockoutEnabled(user.Id, false);
        //    }

        //    // Add user admin to Role Admin if not already added
        //    var rolesForUser = userManager.GetRoles(user.Id);
        //    if (!rolesForUser.Contains(role.Name))
        //    {
        //        var result = userManager.AddToRole(user.Id, role.Name);
        //    }
        //}
    }
    //internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    //{
    //    public Configuration()
    //    {
    //        AutomaticMigrationsEnabled = true;

    //       //New timeout in seconds
    //       CommandTimeout = 60;
    //    }

    //    protected override void Seed(ApplicationDbContext context)
    //    {
    //        base.Seed(context);

    //        var fileStreamCategoryResources = FileStreamCategories.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
    //        var radioStationCategoryResources = LiveStreamCategories.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
    //        var placeHolderImage = new ImageFile("Placeholder-Genres.jpg");

    //        InitializeQuotes(context);
    //        InitializeCategories<FileStreamCategory>(context, fileStreamCategoryResources, placeHolderImage);
    //        InitializeCategories<LiveStreamCategory>(context, radioStationCategoryResources, placeHolderImage);
    //        //InitializeIdentityForEf(context);

    //        context.SaveChanges();
    //    }

    //}
}