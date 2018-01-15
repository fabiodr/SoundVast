using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Filter;
using SoundVast.Components.Rating;

namespace SoundVast.Components.Artist.Models
{
    public class Artist : Audio.Models.Audio
    {
        public virtual YearsActive YearsActive { get; set; }
        public virtual ICollection<ArtistSong> ArtistSongs { get; set; } = new List<ArtistSong>();
        public virtual ICollection<ArtistAlbum> ArtistAlbums { get; set; } = new List<ArtistAlbum>();
    }
}
