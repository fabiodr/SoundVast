using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.LiveStream.Models
{
    public class LiveStream : Audio.Models.Audio
    {
        public string LiveStreamUrl { get; set; }
    }
}
