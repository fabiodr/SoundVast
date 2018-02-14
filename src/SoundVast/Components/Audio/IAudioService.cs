using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Audio
{
    public interface IAudioService<T> where T : Models.Audio
    {
        IEnumerable<T> GetAudios();
        IEnumerable<T> GetAudios(string genreName, string searchQuery, Filter.Filter filter);
        T GetAudio(int id);
        void Add(T model);
        T UpdatePlayCount(int audioId);
        Rating.Models.Rating Rate(int audioId, string userId, bool liked);
    }
}
