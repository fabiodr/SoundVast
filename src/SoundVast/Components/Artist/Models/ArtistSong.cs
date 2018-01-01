using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Artist.Models
{
    public class ArtistSong
    {
        [Required]
        public int Id { get; set; }
        public int ArtistId { get; set; }
        public virtual Artist Artist { get; set; }
        public int? SongId { get; set; }
        public virtual Song.Models.Song Song { get; set; }
    }
}
