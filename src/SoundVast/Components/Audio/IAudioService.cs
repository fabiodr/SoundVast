﻿using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Audio
{
    public interface IAudioService<T> where T : AudioModel
    {
        ICollection<T> GetAudios(int current, int amount);
        T GetAudio(int id);
        ICollection<RatingModel> GetAudioRatings(int id);
        void Add(T model);
        RatingModel RateAudio(int audioId, bool liked, string userId);
    }
}
