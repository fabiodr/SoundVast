using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Comment.Models
{
    public class Comment
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public int? RatingId { get; set; }
        public virtual Rating.Models.Rating Rating { get; set; }
        [Required]
        public int AudioId { get; set; }
        public virtual Audio.Models.Audio Audio { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public int? OriginalCommentId { get; set; }
        public virtual Comment OriginalComment { get; set; }
        public virtual ICollection<Comment> Replies { get; set; }
        public bool IsTopLevelComment => OriginalCommentId == null;
        //public virtual ICollection<CommentRatingJoinModel> CommentRatingJoins { get; set; }
        //public virtual ICollection<CommentReportModel> Reports { get; set; }

        public Comment()
        {
            Date = DateTime.UtcNow;
        }
    }
}
