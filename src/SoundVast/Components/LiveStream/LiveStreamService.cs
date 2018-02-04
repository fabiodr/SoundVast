using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamService : AudioService<Models.LiveStream>, ILiveStreamService
    {
        public LiveStreamService(IRepository<Models.LiveStream> repository, IValidationProvider validationProvider)
            : base(repository, validationProvider)
        {
        }

        public override IEnumerable<Models.LiveStream> GetAudios(string genreName, string searchQuery, Filter.Filter filter)
        {
            var liveStreams = base.GetAudios(genreName, searchQuery, filter).AsQueryable().BuildLiveStream();

            if (filter.DateFrom.HasValue)
            {
                liveStreams = liveStreams.Where(x => x.DateAdded > filter.DateFrom);
            }

            if (filter.Newest)
            {
                liveStreams = liveStreams.OrderByDescending(x => x.DateAdded);
            }

            return liveStreams;
        }
    }
}