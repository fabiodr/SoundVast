using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.User;

namespace SoundVast.Components.Playlist.Models
{
    public class SongPlaylist
    {
        [Required]
        public int Id { get; set; }
        public int SongId { get; set; }
        public Song.Models.Song Song { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int? PlaylistId { get; set; }
        public Playlist Playlist { get; set; }
    }
}
