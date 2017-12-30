using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Artist.Models;

namespace SoundVast.Components.Edit.Models
{
    public class SongPendingEdit : AudioPendingEdit
    {
        public int? AlbumId { get; set; }
        public virtual Album.Models.Album Album { get; set; }
        public virtual ICollection<ArtistSong> ArtistSongs { get; set; }
        public bool Free { get; set; } = false;
    }
}
