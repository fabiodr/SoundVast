using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Filter
{
    public class RatingFilter
    {
        public bool TopRated { get; set; }
        public int MinimumNumberOfRatingsThreshold { get; set; }
    }
}
