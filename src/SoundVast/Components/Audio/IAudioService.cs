using System.Collections.Generic;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Audio
{
    public interface IAudioService
    {
        ICollection<AudioModel> GetSongs(int current, int amount);
        AudioModel GetSong(int id);
    }
}
