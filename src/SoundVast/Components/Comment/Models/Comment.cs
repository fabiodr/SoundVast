using System;
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
        public Comment()
        {
            DateAdded = DateTime.UtcNow;
        }

        [Required]
        public int Id { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public DateTimeOffset DateAdded { get; set; }
        public int? RatingId { get; set; }
        [Required]
        public int AudioId { get; set; }
        public virtual Audio.Models.Audio Audio { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public int? OriginalCommentId { get; set; }
        public virtual Comment OriginalComment { get; set; }
        public virtual ICollection<Comment> Replies { get; set; } = new List<Comment>();
        public virtual ICollection<Rating.Models.Rating> Ratings { get; set; } = new List<Rating.Models.Rating>();
        public bool IsTopLevelComment => OriginalComment == null;
        public int Likes => Ratings.Count(x => x.Liked);
        public int Dislikes => Ratings.Count(x => !x.Liked);
        public Func<Comment, IEnumerable<Comment>> TopLevelReplies = comment =>
        {
            var topLevelComment = GetTopLevelComment(comment);

            return comment.MapToTopLevelReplies(topLevelComment);
        };

        private readonly ICollection<Comment> _topLevelReplies = new List<Comment>();

        public static Comment GetTopLevelComment(Comment comment)
        {
            if (!comment.IsTopLevelComment)
            {
                comment = GetTopLevelComment(comment.OriginalComment);
            }

            return comment;
        }

        private IEnumerable<Comment> MapToTopLevelReplies(Comment comment)
        {
            foreach (var reply in comment.Replies)
            {
                _topLevelReplies.Add(reply);

                MapToTopLevelReplies(reply);
            }

            return _topLevelReplies;
        }
    }
}
