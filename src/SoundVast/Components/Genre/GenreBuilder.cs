using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Genre
{
    public static class GenreBuilder
    {
        public static IQueryable<T> BuildGenre<T>(this IQueryable<T> query) where T : Models.Genre
        {
            return query
                .Include(x => x.AudioGenres).ThenInclude(x => x.Audio);
        }
    }
}
