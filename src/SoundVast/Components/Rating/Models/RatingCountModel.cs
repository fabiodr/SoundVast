using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Rating.Models
{
    public class RatingCountModel
    {
        public int Id { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }

        public void ModifyLike(RatingValue ratingValue)
        {
            Likes += (int)ratingValue;
        }

        public void ModifyDislike(RatingValue ratingValue)
        {
            Dislikes += (int)ratingValue;
        }
    }
}
