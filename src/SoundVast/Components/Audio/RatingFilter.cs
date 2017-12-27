using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class RatingFilter : IDateFilter
    {
        public bool TopRated { get; set; }
        public int MinimumNumberOfRatingsThreshold { get; set; }
        public int From { get; set; }
        public int To { get; set; }
    }
}
