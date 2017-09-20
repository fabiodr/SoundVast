using System.Collections.Generic;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio
{
    public interface IAudioService
    {
        ICollection<AudioModel> GetSongs(int current, int amount);
        AudioModel GetAudio(int id);
        void RateAudio(int audioId, bool liked, string userId);
    }
}
