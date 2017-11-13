using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public interface ISongService : IAudioService<Models.Song>
    {
    }
}
