using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Models.IdentityModels;

namespace SoundVast.Models.FileStreamModels
{
    public class FileStream : Audio
    {
        public TimeSpan? Duration { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string Lyrics { get; set; }
        public string Album { get; set; }
        public string Artist { get; set; }
        public virtual AudioFile AudioFile { get; set; }
        public virtual ICollection<Link> Links { get; set; }

        public FileStream()
        {

        }

        public FileStream(string userId) : base(userId)
        {

        }
    }

    public class FileStreamCategory : Category
    {
        public FileStreamCategory()
        {
        }

        public FileStreamCategory(string name, ImageFile imageFile) : base(name, imageFile)
        {
        }
    }

    public class FileStreamGenre : Genre
    {
        public FileStreamGenre()
        {
        }

        public FileStreamGenre(string name, ImageFile imageFile) : base(name, imageFile)
        {
        }
    }

    public class FileStreamReport : Report
    {
    }

    public class FileStreamRating : Rating
    {
    }
}