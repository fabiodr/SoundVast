using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class CommentFilter : IDateFilter
    {
        public bool MostCommented { get; set; }
        public int From { get; set; }
        public int To { get; set; }
    }
}
