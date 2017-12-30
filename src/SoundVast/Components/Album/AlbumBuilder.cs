using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Album
{
    public static class AlbumBuilder
    {
        public static IQueryable<T> BuildAlbum<T>(this IQueryable<T> query) where T : Models.Album
        {
            return query
                .Include(x => x.AlbumGenres)
                .Include(x => x.ArtistAlbums)
                .Include(x => x.Songs);
        }
    }
}
