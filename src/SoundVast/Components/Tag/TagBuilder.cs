using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Tag
{
    public static class TagBuilder
    {
        public static IQueryable<T> BuildTag<T>(this IQueryable<T> query) where T : Tag
        {
            return query
                .Include(x => x.AudioTags).ThenInclude(x => x.Audio);
        }
    }
}
