﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Artist
{
    public static class ArtistBuilder
    {
        public static IQueryable<T> BuildArtist<T>(this IQueryable<T> query) where T : Models.Artist
        {
            return query
                .Include(x => x.ArtistSongGenres)
                .Include(x => x.ArtistAlbums)
                .Include(x => x.ArtistSongs);
        }
    }
}
