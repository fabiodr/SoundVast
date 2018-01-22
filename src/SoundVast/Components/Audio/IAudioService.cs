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
        ICollection<T> GetAudios(int current, int amount);
        IEnumerable<T> GetAudiosForUser(string userId);
        IEnumerable<T> GetUserLikedAudios(string userId);
        T GetAudio(int? id);
        ICollection<Rating.Models.Rating> GetAudioRatings(int id);
        void Add(T model);
        T Edit(int existingAudioId, T newModel);
        T UpdatePlayCount(int audioId);
        Rating.Models.Rating Rate(int audioId, string userId, bool liked);
    }
}
