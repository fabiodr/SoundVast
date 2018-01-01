using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Artist.Models
{
    public class ArtistSongGenre
    {
        [Required]
        public int Id { get; set; }
        public int ArtistId { get; set; }
        public virtual Artist Artist { get; set; }
        public int SongGenreId { get; set; }
        public virtual SongGenre SongGenre { get; set; }
    }
}
