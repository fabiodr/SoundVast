using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Playlist
{
    public static class PlaylistBuilder
    {
        public static IQueryable<T> BuildPlaylist<T>(this IQueryable<T> query) where T : Models.Playlist
        {
            return query
                .Include(x => x.SongPlaylists).ThenInclude(z => z.Song)
                .Include(x => x.User);
        }
    }
}
