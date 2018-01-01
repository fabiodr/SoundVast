using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Playlist.Models;

namespace SoundVast.Components.Song.Models
{
    public class Song : Audio.Models.Audio
    {
        public bool Free { get; set; } = false;
        public int? AlbumId { get; set; }
        public virtual Album.Models.Album Album { get; set; }
        public virtual ICollection<SongPlaylist> SongPlaylists { get; set; } = new List<SongPlaylist>();
        public virtual ICollection<ArtistSong> ArtistSongs { get; set; } = new List<ArtistSong>();
    }
}
