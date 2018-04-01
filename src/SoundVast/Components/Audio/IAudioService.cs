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
        int GetCount();
        IEnumerable<T> GetAudios();
        IEnumerable<T> GetAudios(string genreName, string searchQuery);
        void Add(T model);
        Rating.Models.Rating Rate(int audioId, string userId, bool liked);
    }
}
