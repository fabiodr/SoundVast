using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Models.IdentityModels;

namespace SoundVast.Filters
{
    public static class CommentFilter
    {
        public static IQueryable<T> ForAudio<T>(this IQueryable<T> source, int audioId) where T : Comment
        {
            return source.Where(x => x.Audio.Id == audioId);
        }
    }
}