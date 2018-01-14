using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Rating
{
    public static class RatingBuilder
    {
        public static IQueryable<T> BuildRating<T>(this IQueryable<T> query) where T : Models.Rating
        {
            return query
                .Include(x => x.Comment)
                .Include(x => x.Audio)
                .Include(x => x.User);
        }
    }
}
