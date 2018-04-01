using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.LiveStream;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.IO;
using Newtonsoft.Json;
using SoundVast.Components.Genre;
using Microsoft.Extensions.Caching.Memory;
using System.Threading;

namespace SoundVast.Components.Dirble
{
    public class Dirble : IDirble
    {
        public static string DIRBLE_API_ADDRESS = "http://api.dirble.com/v2/";
        private readonly ILogger _logger;
        private readonly string _key;
        private readonly IMemoryCache _cache;

        public Dirble(ILoggerFactory loggerFactory, IConfiguration configuration, IMemoryCache cache)
        {
            _logger = loggerFactory.CreateLogger<Dirble>();
            _key = configuration["DIRBLE_API_KEY"];
            _cache = cache;
        }

        private async Task<T> GetDirbleResponse<T>(string url, TimeSpan cacheTime) where T : new()
        {
            using (var client = new HttpClient())
            {
                if (!_cache.TryGetValue(url, out T convertedResponse))
                {
                    if (convertedResponse == null) convertedResponse = new T();

                    try
                    {
                        var response = await client.GetAsync(DIRBLE_API_ADDRESS + url);

                        if (response.IsSuccessStatusCode)
                        {
                            var stream = await response.Content.ReadAsStreamAsync();
                            var json = await new StreamReader(stream).ReadToEndAsync();

                            convertedResponse = JsonConvert.DeserializeObject<T>(json);

                            _cache.Set(url, convertedResponse, new MemoryCacheEntryOptions {
                                AbsoluteExpirationRelativeToNow = cacheTime
                            });
                        }
                    }
                    catch (Exception e)
                    {
                        _logger.LogError(e, e.Message);
                    }
                }

                return convertedResponse;
            }
        }

        public async Task<StationDirbleDto> GetStation(int id, TimeSpan cacheTime) => await GetDirbleResponse<StationDirbleDto>($"station/{id}?token={_key}", cacheTime);

        public async Task<StationDirbleDto> GetStation(int id) => await GetDirbleResponse<StationDirbleDto>($"station/{id}?token={_key}", TimeSpan.Zero);
        public async Task<IEnumerable<StationDirbleDto>> GetStations(int page, int perPage = 30, int offset = 0) => await GetDirbleResponse<List<StationDirbleDto>>($"stations?token={_key}&per_page={perPage}&page={page}&offset={offset}", TimeSpan.Zero);

        public async Task<IEnumerable<GenreDirbleDto>> GetCategoriesInTreeView() => await GetDirbleResponse<List<GenreDirbleDto>>($"categories/tree?token={_key}", TimeSpan.Zero);

        public async Task<IEnumerable<StationDirbleDto>> GetPopularStations(int page, TimeSpan cacheTime, int perPage = 30, int offset = 0) => await GetDirbleResponse<List<StationDirbleDto>>($"stations/popular?token={_key}&per_page={perPage}&page={page}&offset={offset}", cacheTime);
    }
}
