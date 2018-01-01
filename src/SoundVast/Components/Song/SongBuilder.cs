using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Song
{
    public static class SongBuilder
    {
        public static IQueryable<T> BuildSong<T>(this IQueryable<T> query) where T : Models.Song
        {
            return query
                .Include(x => x.Album)
                .Include(x => x.ArtistSongs).ThenInclude(x => x.Artist)
                .Include(x => x.Contributors);
        }
    }
}
