using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Filter
{
    public class Filter
    {
        public DateTime? DateFrom { get; set; }
        public RatingFilter RatingFilter { get; set; }
        public bool Newest { get; set; }
        public bool MostCommented { get; set; }
        public bool MostPlayed { get; set; }
    }
}
