using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Playlist.Models;

namespace SoundVast.Components.Playlist
{
    public interface IPlaylistService
    {
        void AddToPlaylist(SongPlaylist songPlaylist);
        void Add(Models.Playlist playlist);
        IEnumerable<Models.Playlist> GetPlaylistsForUser(string userId);
        Models.Playlist GetPlaylist(int id);
    }
}
