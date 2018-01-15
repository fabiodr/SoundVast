using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating;

namespace SoundVast.Components.Album.Models
{
    public class Album : Audio.Models.Audio
    {
        public DateTimeOffset ReleaseDate { get; set; }
        public virtual ICollection<Song.Models.Song> Songs { get; set; } = new List<Song.Models.Song>();
        public virtual ICollection<ArtistAlbum> ArtistAlbums { get; set; } = new List<ArtistAlbum>();
    }
}
