using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio.Models
{
    public abstract class Audio : IRatable
    {
        protected Audio()
        {
            UploadDate = DateTime.UtcNow;
        }

        [Required]
        public int Id { get; set; }
        //public static int PageSize { get; } = 50;
        // public static int PlaylistCount { get; } = 50;
        [Required]
        public string Name { get; set; }
        [Required]
        public string CoverImageUrl { get; set; }
        [Required]
        public DateTimeOffset UploadDate { get; set; }
        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int? GenreId { get; set; }
        public virtual Genre.Models.Genre Genre { get; set; }
        public int Likes => Ratings.Count(x => x.Liked);
        public int Dislikes => Ratings.Count(x => !x.Liked);
        public virtual ICollection<Rating.Models.Rating> Ratings { get; set; } = new List<Rating.Models.Rating>();
        public virtual ICollection<Comment.Models.Comment> Comments { get; set; }
        //   public virtual ApplicationUser User { get; set; }
        //   public virtual ImageFileModel ImageFile { get; set; }
        //   public virtual CategoryModel Category { get; set; }
        //   public virtual RatingCountModel Rating { get; set; } = new RatingCountModel();
        //   public virtual ICollection<AudioGenreModel> Genres { get; set; }
        //   public virtual ICollection<Comment> Comments { get; set; }
        //   public virtual ICollection<AudioRatingJoinModel> AudioRatingJoins { get; set; }

        //public Audio(string userId)
        //{
        //    UserId = userId;
        //    UploadDate = DateTimeOffset.Now;
        //}

        //public void IncrementView()
        //{
        //    UniqueViews += 1;
        //}

        //public void ModifyComment(RatingValue ratingValue)
        //{
        //    CommentCount += (int)ratingValue;
        //}
    }
}
