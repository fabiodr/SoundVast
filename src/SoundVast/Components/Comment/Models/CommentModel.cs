using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Comment.Models
{
    public class CommentModel
    {
        public int Id { get; set; }
        public static int RepliesToLoadInitially { get; } = 2;
        public static int CommentsPerPage { get; } = 12;

        public string Body { get; set; }
        public DateTime Date { get; set; }
        public virtual RatingCountModel RatingCount { get; set; } = new RatingCountModel();
        public virtual AudioModel Audio { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<CommentRatingJoinModel> CommentRatingJoins { get; set; }
        public virtual ICollection<CommentReportModel> Reports { get; set; }
        public virtual ICollection<CommentModel> Replies { get; set; }
        public virtual CommentModel OriginalComment { get; set; }

        [Obsolete("For model binding only", true)]
        public CommentModel()
        {

        }

        public CommentModel(string body)
        {
            Date = DateTime.Now;
            Body = body;
        }
    }
}
