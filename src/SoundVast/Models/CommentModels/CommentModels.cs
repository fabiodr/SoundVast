using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Models.IdentityModels;

namespace SoundVast.Models.CommentModels
{
    public class CommentReport : Report
    {
        public virtual Comment Comment { get; set; }
    }

    public class CommentRating : Rating
    {
        public int CommentId { get; set; }
        public virtual Comment Comment { get; set; }
    }
}