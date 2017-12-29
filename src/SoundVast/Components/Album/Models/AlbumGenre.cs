using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Album.Models
{
    public class AlbumGenre
    {
        [Required]
        public int Id { get; set; }
        public int AlbumId { get; set; }
        public virtual Album Album { get; set; }
        public int SongGenreId { get; set; }
        public virtual SongGenre SongGenre { get; set; }
    }
}
