using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;

namespace SoundVast.Components.Filter
{
    public class CommentFilter : IDateFilter
    {
        public bool MostCommented { get; set; }
        public int From { get; set; }
        public int To { get; set; }
    }
}
