using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Filter
{
    public class PlayedFilter : IDateFilter
    {
        public bool MostPlayed { get; set; }
        public int From { get; set; }
        public int To { get; set; }
    }
}
