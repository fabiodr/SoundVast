using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Comment
{
    public static class CommentBuilder
    {
        public static ICollection<T> BuildComment<T>(this IQueryable<T> query) where T : Models.Comment
        {
            return query
                .Include(x => x.User)
                .Include(x => x.OriginalComment)
                .Include(x => x.Replies)
                .Include(x => x.Audio)
                .Include(x => x.Ratings).ToList();
        }
    }
}
