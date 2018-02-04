using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.LiveStream
{
    public static class LiveStreamBuilder
    {
        public static IQueryable<T> BuildLiveStream<T>(this IQueryable<T> query) where T : Models.LiveStream
        {
            return query;
        }
    }
}
