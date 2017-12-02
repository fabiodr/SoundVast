using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class Filter
    {
        public bool Newest { get; set; }
        public int? TopRatedDays { get; set; }
        public int? MostCommentedDays { get; set; }
        public int? MostPlayedDays { get; set; }
    }
}
