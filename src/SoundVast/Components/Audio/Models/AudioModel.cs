using SoundVast.Components.Category;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Category.Models;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Image.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio.Models
{
    public class AudioModel
    {
        [Required]
        public int Id { get; set; }
        //public static int PageSize { get; } = 50;
        // public static int PlaylistCount { get; } = 50;
        [Required]
        public string Name { get; set; }
        public string Artist { get; set; }
        [Required]
        public string CoverImageUrl { get; set; }
      //  public int CommentCount { get; private set; }
      //  public int UniqueViews { get; private set; }
     //   public DateTimeOffset UploadDate { get; private set; }
        public int? GenreId { get; set; }
        [Required]
        public string UserId { get; set; }
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
