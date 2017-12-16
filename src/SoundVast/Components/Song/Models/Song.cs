using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Song.Models
{
    public class Song : Audio.Models.Audio
    {
        public string Artist { get; set; }
        public bool Free { get; set; } = false;
    }
}
