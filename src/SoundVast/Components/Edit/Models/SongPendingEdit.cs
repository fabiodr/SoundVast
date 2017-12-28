using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Edit.Models
{
    public class SongPendingEdit : AudioPendingEdit
    {
        public string Artist { get; set; }
        public bool Free { get; set; } = false;
    }
}
