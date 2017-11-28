using System;
using System.Collections.Generic;
using System.Linq;
using System.Globalization;
using System.Collections;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.DependencyInjection;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.CustomHelpers;
using SoundVast.Properties;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Data
{
    public static class Seeder
    {
        private const string PlaceholderImageName = "SoundVast";

        private static IHostingEnvironment _hostingEnvironment;
        private static ICloudStorage _cloudStorage;

        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    _hostingEnvironment = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();
                    _cloudStorage = scope.ServiceProvider.GetRequiredService<ICloudStorage>();

                    context.Database.Migrate();

                    var musicGenres = MusicGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                    var liveStreamGenres = LiveStreamGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                    //var radioStationCategoryResources = LiveStreamCategories.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                    //var placeHolderImage = new ImageFileModel("Placeholder.jpg");

                    await SeedImages();
                    SeedGenres(context, musicGenres, GenreName.Music);
                    SeedGenres(context, liveStreamGenres, GenreName.LiveStream);

                    //   InitializeQuotes(context);
                    //   InitializeCategories<FileStreamCategoryModel>(context, fileStreamCategoryResources, placeHolderImage);
                    //   InitializeCategories<LiveStreamCategoryModel>(context, radioStationCategoryResources, placeHolderImage);
                    //InitializeIdentityForEf(context);

                    context.SaveChanges();
                }
            }

            return webHost;
        }

        //private static void InitializeQuotes(ApplicationDbContext context)
        //{
        //    var quoteResources = Quotes.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
        //    var quotes = quoteResources.Select(x => new QuoteModel { Quotation = (string)x.Value });

        //    context.Quotes.AddRange(quotes.Where(quote => !context.Quotes.Any(x => x.Quotation == quote.Quotation)));
        //}

        //public static void InitializeCategories<T>(ApplicationDbContext context, DictionaryEntry[] categoryResources, ImageFileModel imageFile)
        //        where T : CategoryModel
        //{
        //    var categories = categoryResources.Select(x => (T)Activator.CreateInstance(typeof(T), new object[] { x.Value, imageFile }));

        //    context.Set<T>().AddRange(categories.Where(category => !context.Set<T>().Any(x => x.Name == category.Name)));
        //}

        private static async Task SeedImages()
        {
            var placeholderImageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, PlaceholderImageName);
            var path = Path.Combine(_hostingEnvironment.WebRootPath, "images/logo/icon/SV_Icon.svg");

            await placeholderImageBlob.UploadFromFileAsync(path, "image/svg+xml");
        }

        public static void SeedGenres(ApplicationDbContext context, DictionaryEntry[] genreResources, string genreType)
        {
            var placeholderImageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, PlaceholderImageName);

            var genres = genreResources.Select(x => new Genre
            {
                Name = (string)x.Value,
                Type = genreType,
                CoverImageUrl = placeholderImageBlob.CloudBlockBlob.Uri.AbsoluteUri
            });
    
            context.Set<Genre>().AddRange(genres.Where(genre => !context.Set<Genre>()
                .Any(x => x.Name == genre.Name && x.Type == genre.Type)));
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