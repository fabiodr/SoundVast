using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Song.Models
{
    public class GetSongRatingModel
    {
        public int Id { get; set; }
		public int Likes { get; set; }
		public int Dislikes { get; set; }
    }
}
