using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Album.Models;
using SoundVast.Components.Artist.Models;

namespace SoundVast.Components.Genre.Models
{
    public class SongGenre : Genre
    {
        public virtual ICollection<ArtistGenre> ArtistGenres { get; set; }
        public virtual ICollection<AlbumGenre> AlbumGenres { get; set; }
    }
}
