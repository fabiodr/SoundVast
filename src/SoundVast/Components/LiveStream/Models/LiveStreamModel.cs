using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.LiveStream.Models
{
    public class LiveStreamModel : AudioModel
    {
        public string LiveStreamUrl { get; set; }
    }
}
