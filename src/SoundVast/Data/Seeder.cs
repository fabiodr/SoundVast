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
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using System.Xml.Linq;
using Newtonsoft.Json;
using SoundVast.Components.LiveStream;
using System.Net;
using Microsoft.AspNetCore.StaticFiles;
using SoundVast.Utilities;
using SoundVast.Components.Dirble;

namespace SoundVast.Data
{
    public static class Seeder
    {
        private static IHostingEnvironment _env;
        private static IConfiguration _configuration;
        private static ICloudStorage _cloudStorage;
        private static IAudioService<Audio> _audioService;
        private static ILiveStreamService _liveStreamService;
        private static IUploadService _uploadService;
        private static IGenreService _genreService;
        private static IDirble _dirble;

        public static async Task<IWebHost> SeedData(this IWebHost webHost)
        {
            using (var scope = webHost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    _env = scope.ServiceProvider.GetRequiredService<IHostingEnvironment>();
                    _configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();
                    _cloudStorage = scope.ServiceProvider.GetRequiredService<ICloudStorage>();
                    _audioService = scope.ServiceProvider.GetRequiredService<IAudioService<Audio>>();
                    _uploadService = scope.ServiceProvider.GetRequiredService<IUploadService>();
                    _genreService = scope.ServiceProvider.GetRequiredService<IGenreService>();
                    _liveStreamService = scope.ServiceProvider.GetRequiredService<ILiveStreamService>();
                    _dirble = scope.ServiceProvider.GetRequiredService<IDirble>();

                    context.Database.Migrate();

                    var musicGenres = MusicGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();
                    var otherGenres = OtherGenres.ResourceManager.GetResourceSet(CultureInfo.CurrentUICulture, true, true).OfType<DictionaryEntry>().ToArray();

                    await SeedImages();
                    //  await SeedGenres(context);
                    //  await SeedLiveStreams();
                    SeedQuotes(context);

                    _genreService.UpdateCoverImages();

                    // LuceneSearch.AddOrUpdateLuceneIndex(_audioService.GetAudios());

                    context.SaveChanges();
                }
            }

            return webHost;
        }

        public static async Task SeedLiveStreams()
        {
            IEnumerable<StationDirbleDto> stationDtos;
            var page = 1;

            do
            {
                stationDtos = await _dirble.GetStations(page);

                foreach (var stationDto in stationDtos)
                {
                    var liveStreamExists = _liveStreamService.GetLiveStream(stationDto.Id) != null;

                    if (!liveStreamExists)
                    {
                        string coverImageName = null;

                        if (stationDto.Image.Url != null)
                        {
                            using (var webClient = new WebClient())
                            {
                                try
                                {
                                    using (var imageStream = webClient.OpenRead(new Uri(stationDto.Image.Url)))
                                    {
                                        using (var memoryStream = new MemoryStream())
                                        {
                                            await imageStream.CopyToAsync(memoryStream);

                                            memoryStream.Position = 0;

                                            new FileExtensionContentTypeProvider().TryGetContentType(stationDto.Image.Url, out string contentType);

                                            try
                                            {
                                                coverImageName = await _uploadService.UploadCoverImage(stationDto.Image.Url, memoryStream, contentType);
                                            }
                                            catch (Exception) { }
                                        }
                                    }
                                }
                                catch (WebException) { }
                            }
                        }

                        var liveStream = new LiveStream
                        {
                            Id = stationDto.Id,
                            Name = stationDto.Name,
                            Country = stationDto.Country,
                            Description = String.IsNullOrWhiteSpace(stationDto.Description) ? null : stationDto.Description,
                            CoverImageName = coverImageName,
                            WebsiteUrl = String.IsNullOrWhiteSpace(stationDto.Website) ? null : stationDto.Website,
                            TwitterUrl = String.IsNullOrWhiteSpace(stationDto.Twitter) ? null : stationDto.Twitter,
                            FacebookUrl = String.IsNullOrWhiteSpace(stationDto.Facebook) ? null : stationDto.Facebook,
                            DateAdded = DateTimeOffset.Parse(stationDto.CreatedAt),
                            DateUpdated = DateTimeOffset.Parse(stationDto.UpdatedAt),
                            Slug = stationDto.Slug,
                        };

                        foreach (var category in stationDto.Categories)
                        {
                            liveStream.AudioGenres.Add(new AudioGenre
                            {
                                GenreId = category.Id,
                            });
                        }

                        foreach (var streamDto in stationDto.Streams)
                        {
                            liveStream.StreamDatas.Add(new StreamData
                            {
                                LiveStreamUrl = streamDto.Stream,
                                Bitrate = streamDto.Bitrate == 0 ? null : streamDto.Bitrate,
                                ContentType = streamDto.ContentType == "?" ? null : streamDto.ContentType,
                            });
                        }

                        _liveStreamService.Add(liveStream);
                    }

                }

                page++;
            } while (stationDtos.Any());
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
            var path = Path.Combine(_env.WebRootPath, "images/logo/SV_Icon.svg");
            var placeholderImageBlob = _cloudStorage.CloudBlobContainers[CloudStorageType.AppImage].GetBlockBlobReference(Image.PlaceholderImageName);

            placeholderImageBlob.Properties.ContentType = contentType;

            await placeholderImageBlob.UploadFromFileAsync(path);
        }

        public static async Task SeedGenres(ApplicationDbContext context)
        {
            var genreDtos = await _dirble.GetCategoriesInTreeView();

            Genre GetGenre(GenreDirbleDto genreDto)
            {
                var genre = new Genre
                {
                    Id = genreDto.Id,
                    Name = genreDto.Title,
                    Description = String.IsNullOrWhiteSpace(genreDto.Description) ? null : genreDto.Description,
                    Slug = genreDto.Slug,
                    Urlid = String.IsNullOrWhiteSpace(genreDto.Urlid) ? null : genreDto.Urlid,
                    DateAdded = DateTimeOffset.Parse(genreDto.CreatedAt),
                    DateUpdated = DateTimeOffset.Parse(genreDto.UpdatedAt),
                    Position = genreDto.Position,
                };

                return genre;
            };

            void AddChildGenres(Genre genre, GenreDirbleDto genreDto)
            {
                foreach (var child in genreDto.Children)
                {
                    var childGenre = GetGenre(child);

                    genre.ChildGenres.Add(childGenre);

                    AddChildGenres(childGenre, child);
                }
            }

            foreach (var genreDto in genreDtos)
            {
                var genre = GetGenre(genreDto);

                AddChildGenres(genre, genreDto);

                _genreService.Add(genre);
            }
        }
    }
}