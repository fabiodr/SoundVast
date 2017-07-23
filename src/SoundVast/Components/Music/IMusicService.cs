using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Music
{
    public interface IMusicService
    {
        ICollection<AudioModel> GetMusic(int current, int amount);
    }
}
