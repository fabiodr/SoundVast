using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Rating.Models;

namespace SoundVast.Components.Comment.Models
{
    public class CommentRatingModel : RatingModel
    {
        public ICollection<CommentRatingJoinModel> CommentRatingJoins { get; set; }
    }
}
