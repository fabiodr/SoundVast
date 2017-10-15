using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Audio
{
    public static class AudioBuilder
    {
        public static IQueryable<Models.Audio> BuildAudio(this IQueryable<Models.Audio> query)
        {
            return query.Include(x => x.Genre)
                .Include(x => x.User)
                .Include(x => x.Ratings);
        }
    }
}
