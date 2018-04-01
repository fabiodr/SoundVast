using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public interface ILiveStreamService : IAudioService<Models.LiveStream>
    {
        Models.LiveStream GetLiveStream(int id);
        Task<IEnumerable<Models.LiveStream>> GetPopularLiveStreams(int page, string genreName, string searchQuery);
        IEnumerable<Models.LiveStream> GetLiveStreams(int count, string genreName, string searchQuery);
    }
}
