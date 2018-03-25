using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.LiveStream.Models
{
    public class StreamData
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string LiveStreamUrl { get; set; }
        public string ContentType { get; set; }
        public int? Bitrate { get; set; }
    }
}