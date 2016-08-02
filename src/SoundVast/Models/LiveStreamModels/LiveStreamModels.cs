using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using SoundVast.Models.IdentityModels;

namespace SoundVast.Models.LiveStreamModels
{ 
    public class LiveStream : Audio
    {
        public string WebsiteUrl { get; set; }
        public string AudioUrl { get; set; }

        public LiveStream()
        {

        }

        public LiveStream(string userId)
            : base(userId)
        {

        }
    }

    public class LiveStreamCategory : Category
    {
        public LiveStreamCategory()
        {
        }

        public LiveStreamCategory(string name, ImageFile imageFile) : base(name, imageFile)
        {
        }
    }

    public class LiveStreamGenre : Genre
    {
        public LiveStreamGenre()
        {
        }

        public LiveStreamGenre(string name, ImageFile imageFile) : base(name, imageFile)
        {
        }
    }

    public class LiveStreamReport : Report
    {
        public virtual LiveStream LiveStream { get; set; }
    }

    public class LiveStreamRating : Rating
    {
        public virtual LiveStream LiveStream { get; set; }
    }
}