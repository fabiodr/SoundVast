﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Comment.Models
{
    public class Comment : IRatable
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public int? RatingId { get; set; }
        [Required]
        public int AudioId { get; set; }
        public virtual Audio.Models.Audio Audio { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public int? OriginalCommentId { get; set; }
        public virtual Comment OriginalComment { get; set; }
        public virtual ICollection<Comment> Replies { get; set; }
        public virtual ICollection<Rating.Models.Rating> Ratings { get; set; }
        public bool IsTopLevelComment => OriginalCommentId == null;
        public int Likes => Ratings.Count(x => x.Liked);
        public int Dislikes => Ratings.Count(x => !x.Liked);
        //public virtual ICollection<CommentRatingJoinModel> CommentRatingJoins { get; set; }
        //public virtual ICollection<CommentReportModel> Reports { get; set; }

        public Comment()
        {
            Date = DateTime.UtcNow;
        }
    }
}