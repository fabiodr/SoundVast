using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;

namespace SoundVast.Components.Audio.Models
{
    public abstract class AudioModel
    {
        [Required]
        public int Id { get; set; }
        //public static int PageSize { get; } = 50;
        // public static int PlaylistCount { get; } = 50;
        [Required]
        public string Name { get; set; }

        [Required]
        public string CoverImageUrl { get; set; }
      //  public int CommentCount { get; private set; }
      //  public int UniqueViews { get; private set; }
     //   public DateTimeOffset UploadDate { get; private set; }
        [Required]
        public string UserId { get; set; }
        public int? GenreId { get; set; }
        public virtual GenreModel Genre { get; set; }
        public virtual ICollection<RatingModel> Ratings { get; set; }
     //   public virtual ApplicationUser User { get; set; }
     //   public virtual ImageFileModel ImageFile { get; set; }
     //   public virtual CategoryModel Category { get; set; }
     //   public virtual RatingCountModel RatingCount { get; set; } = new RatingCountModel();
     //   public virtual ICollection<AudioGenreModel> Genres { get; set; }
     //   public virtual ICollection<CommentModel> Comments { get; set; }
     //   public virtual ICollection<AudioRatingJoinModel> AudioRatingJoins { get; set; }

        //public AudioModel(string userId)
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
