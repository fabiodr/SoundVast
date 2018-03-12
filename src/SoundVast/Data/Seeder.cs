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
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Search;
using SoundVast.Properties;
using SoundVast.Storage.CloudStorage;
using SoundVast.Components.Upload;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Data
{
    public static class Seeder
    {
        private static IHostingEnvironment _hostingEnvironment;
        private static ICloudStorage _cloudStorage;
        private static IAudioService<Audio> _audioService;
        private static IUploadService _uploadService;
        private static IGenreService _genreService;

        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    _hostingEnvironment = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();
                    _cloudStorage = scope.ServiceProvider.GetRequiredService<ICloudStorage>();
                    _audioService = scope.ServiceProvider.GetRequiredService<IAudioService<Audio>>();
                    _uploadService = scope.ServiceProvider.GetRequiredService<IUploadService>();
                    _genreService = scope.ServiceProvider.GetRequiredService<IGenreService>();

                    context.Database.Migrate();

                    var musicGenres = MusicGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                    var otherGenres = OtherGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();

                    await SeedImages();

                    SeedMusicGenres(context, musicGenres);
                    SeedOtherGenres(context, otherGenres);
                    SeedQuotes(context);

                    _genreService.UpdateCoverImages();

                    LuceneSearch.AddOrUpdateLuceneIndex(_audioService.GetAudios());

                    context.SaveChanges();
                }
            }

            return webHost;
        }

        public static void SeedQuotes(ApplicationDbContext context)
        {
            var quoteResources = Quotes.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
            var quotes = quoteResources.Select(x => new Quote { Quotation = (string)x.Value });

            context.Quotes.AddRange(quotes.Where(quote => !context.Quotes.Any(x => x.Quotation == quote.Quotation)));
        }

        private static async Task SeedImages()
        {
            var contentType = "image/svg+xml";
            var path = Path.Combine(_hostingEnvironment.WebRootPath, "images/logo/SV_Icon.svg");
            var placeholderImageBlob = _cloudStorage.CloudBlobContainers[CloudStorageType.AppImage].GetBlockBlobReference(Image.PlaceholderImageName);

            placeholderImageBlob.Properties.ContentType = contentType;

            await placeholderImageBlob.UploadFromFileAsync(path);
        }

        public static void SeedMusicGenres(ApplicationDbContext context, DictionaryEntry[] musicGenreResources)
        {
            var musicGenres = musicGenreResources.Select(x => new Genre
            {
                Id = (string)x.Key,
                Name = (string)x.Value,
                Type = GenreName.Music,
            });
    
            context.Set<Genre>().AddRange(musicGenres.Where(genre => !context.Set<Genre>().Any(x => x.Id == genre.Id)));
        }

        public static void SeedOtherGenres(ApplicationDbContext context, DictionaryEntry[] otherGenreResources)
        {
            var otherGenres = otherGenreResources.Select(x => new Genre
            {
                Id = (string)x.Key,
                Name = (string)x.Value,
                Type = GenreName.Other,
            });

            context.Set<Genre>().AddRange(otherGenres.Where(genre => !context.Set<Genre>().Any(x => x.Id == genre.Id)));
        }
    }
}