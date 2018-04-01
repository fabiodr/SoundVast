using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Repository;
using SoundVast.Validation;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;
using SoundVast.Components.Dirble;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamService : AudioService<Models.LiveStream>, ILiveStreamService
    {
        private IRepository<Models.LiveStream> _repository;
        private IDirble _dirble;

        public LiveStreamService(IRepository<Models.LiveStream> repository, 
            IValidationProvider validationProvider, ICloudStorage cloudStorage, IDirble dirble)
            : base(repository, validationProvider, cloudStorage)
        {
            _repository = repository;
            _dirble = dirble;
        }

        public Models.LiveStream GetLiveStream(int id)
        {
            return _repository.GetAll().BuildLiveStream().SingleOrDefault(x => x.Id == id);
        }

        public async Task<IEnumerable<Models.LiveStream>> GetPopularLiveStreams(int page, string genreName, string searchQuery)
        {
            var liveStreams = GetAudios(genreName, searchQuery).AsQueryable().BuildLiveStream();
            var popularLivestreams = new List<Models.LiveStream>();
            var pageToFetch = 1;

            while (pageToFetch <= page)
            {
                var stationDtos = await _dirble.GetPopularStations(pageToFetch, TimeSpan.FromMinutes(20), 30);

                foreach (var stationDto in stationDtos)
                {
                    var station = GetLiveStream(stationDto.Id);

                    if (station != null)
                    {
                        popularLivestreams.Add(station);
                    }
                }

                pageToFetch++;
            }

            return popularLivestreams;
        }

        public IEnumerable<Models.LiveStream> GetLiveStreams(int count, string genreName, string searchQuery)
        {
            var liveStreams = GetAudios(genreName, searchQuery).AsQueryable().BuildLiveStream();

            return liveStreams.Take(count);
        }
    }
}