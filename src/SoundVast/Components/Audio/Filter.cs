using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class Filter
    {
        public bool Newest { get; set; }
        public RatingFilter RatingFilter { get; set; }
        public CommentFilter CommentFilter { get; set; }
        public PlayedFilter PlayedFilter { get; set; }
    }
}
