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
        ICollection<T> GetAudios(string genreName, Filter filter);
        ICollection<T> GetAudios(int current, int amount);
        T GetAudio(int id);
        ICollection<Rating.Models.Rating> GetAudioRatings(int id);
        void Add(T model);
        Rating.Models.Rating RateAudio(int audioId, string userId, bool liked);
    }
}
