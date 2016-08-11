using System.Collections.Generic;
using System;
using SoundVast.Models.CommentModels;

namespace SoundVast.Models.IdentityModels
{
    public enum RatingValue
    {
        Increment = 1,
        Decrement = -1
    }

    public interface ICategorizable
    {
         Category Category { get; set; }
    }

    public abstract class Entity
    {
        public int Id { get; set; }
    }

    public class Link : Entity
    {
        private string _linkUrl;
        public string LinkUrl
        {
            get
            { return _linkUrl; }
            set
            {
                if (!string.IsNullOrWhiteSpace(value))
                {
                    _linkUrl = value;
                }
            }
        }

        protected Link()
        {

        }

        public Link(string linkUrl)
        {
            LinkUrl = linkUrl;
        }
    }

    public abstract class File : Entity
    {
        public string Name { get; set; }

        protected File() { }

        protected File(string name)
        {
            Name = name;
        }
    }

    public class ImageFile : File
    {
        public ImageFile() { }

        public ImageFile(string name) : base(name)
        {

        }
    }

    public class Category : Entity
    {
        public string Name { get; set; }
        public virtual ImageFile ImageFile { get; private set; }
        public virtual ICollection<Audio> Audios { get; set; }
        public virtual ICollection<Genre> Genres { get; set; } 

        public Category()
        {

        }

        protected Category(string name, ImageFile imageFile)
        {
            Name = name;
            ImageFile = imageFile;
        }
    }

    public class AudioGenre
    {
        public int AudioId { get; set; }
        public Audio Audio { get; set; }

        public int GenreId { get; set; }
        public Genre Genre { get; set; }
    }

    public class Genre : Entity, ICategorizable
    {
        public string Name { get; set; }
        public virtual ImageFile ImageFile { get; private set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<AudioGenre> Audios { get; set; }
         
        public Genre()
        {

        }

        protected Genre(string name, ImageFile imageFile)
        {
            Name = name;
            ImageFile = imageFile;
        }
    }

    public class AudioFile : File
    {
        public AudioFile()
        {
        }

        public AudioFile(string name) : base(name)
        {

        }
    }

    public class AudioRating : Rating
    {
        public ICollection<AudioRatingJoin> AudioRatingJoins { get; set; }
    }

    public class AudioRatingJoin
    {
        public int AudioId { get; set; }
        public virtual Audio Audio { get; set; }

        public int AudioRatingId { get; set; }
        public virtual AudioRating AudioRating { get; set; }
    }

    public class Audio : Entity, ICategorizable
    {
        public static int PageSize { get; } = 50;
        public static int PlaylistCount { get; } = 50;

        public string Name { get; set; }
        public int CommentCount { get; private set; }
        public int UniqueViews { get; private set; }
        public DateTimeOffset UploadDate { get; private set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ImageFile ImageFile { get; set; }
        public virtual Category Category { get; set; }
        public virtual RatingCount RatingCount { get; set; } = new RatingCount();
        public virtual ICollection<AudioGenre> Genres { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<AudioRatingJoin> AudioRatingJoins { get; set; }

        public Audio()
        {
        }

        public Audio(string userId)
        {
            UserId = userId;
            UploadDate = DateTimeOffset.Now;
        }

        public void IncrementView()
        {
            UniqueViews += 1;
        }

        public void ModifyComment(RatingValue ratingValue)
        {
            CommentCount += (int)ratingValue;
        }
    }

    public class Playlist : Audio
    {
        public Playlist()
        {

        }

        public Playlist(string userId) : base(userId)
        {

        }
    }

    //public class Rating : Entity
    //{
    //    public int Likes { get; private set; }
    //    public int Dislikes { get; private set; }
    //    public virtual Audio Audio { get; set; }

    //    public void ModifyLike(RatingValue ratingValue)
    //    {
    //        Likes += (int)ratingValue;
    //    }

    //    public void ModifyDislike(RatingValue ratingValue)
    //    {
    //        Dislikes += (int)ratingValue;
    //    }
    //}

    public class Rating : Entity
    {
        public bool Liked { get; set; }
        public virtual ApplicationUser User { get; set; }
    }

    public class Report : Entity
    {
        public string Reason { get; set; }
        public string AdditionalDetails { get; set; }
        public virtual Audio Audio { get; set; }
    }

    public class Quote : Entity
    {
        public string Quotation { get; set; }
    }

    public class Comment : Entity
    {
        public static int RepliesToLoadInitially { get; } = 2;
        public static int CommentsPerPage { get; } = 12;

        public string Body { get; set; }
        public DateTime Date { get; set; }
        public virtual RatingCount RatingCount { get; set; } = new RatingCount();
        public virtual Audio Audio { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<CommentRatingJoin> CommentRatingJoins { get; set; }
        public virtual ICollection<CommentReport> Reports { get; set; }
        public virtual ICollection<Comment> Replies { get; set; }
        public virtual Comment OriginalComment { get; set; }

        [Obsolete("For model binding only", true)]
        public Comment()
        {
            
        }

        public Comment(string body)
        {
            Date = DateTime.Now;
            Body = body;
        }
    }

    public class RatingCount : Entity
    {
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