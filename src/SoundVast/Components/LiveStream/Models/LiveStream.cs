using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.LiveStream.Models
{
    public class LiveStream : Audio.Models.Audio
    {
        public string WebsiteUrl { get; set; }
        [Required]
        public string Country { get; set; }
        public string TwitterUrl { get; set; }
        public string FacebookUrl { get; set; }
        [Required]
        public string Slug { get; set; }
        [Required]
        public DateTimeOffset DateUpdated { get; set; }
        public virtual ICollection<StreamData> StreamDatas { get; set; } = new List<StreamData>();
    }
}
