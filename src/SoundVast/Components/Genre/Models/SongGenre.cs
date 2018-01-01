using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Album.Models;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Genre.Models
{
    public class SongGenre : Genre
    {
        public virtual ICollection<ArtistSongGenre> ArtistSongGenres { get; set; }
        public virtual ICollection<AlbumSongGenre> AlbumSongGenres { get; set; }
    }
}
