using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Flag.Models
{
    public class Flag
    {
        public int Id { get; set; }
        public string Reason { get; set; }
        public string AdditionalDetails { get; set; }
        public int? AudioId { get; set; }
        public virtual Audio.Models.Audio Audio { get; set; }
        public int? CommentId { get; set; }
        public virtual Comment.Models.Comment Comment { get; set; }
    }
}
