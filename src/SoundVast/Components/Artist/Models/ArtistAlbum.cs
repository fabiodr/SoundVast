using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Artist.Models
{
    public class ArtistAlbum
    {
        [Required]
        public int Id { get; set; }
        public int? ArtistId { get; set; }
        public virtual Artist Artist { get; set; }
        public int AlbumId { get; set; }
        public virtual Album.Models.Album Album { get; set; }
    }
}
