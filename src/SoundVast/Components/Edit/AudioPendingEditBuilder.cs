using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Edit.Models;

namespace SoundVast.Components.Edit
{
    public static class AudioPendingEditBuilder
    {
        public static IQueryable<T> BuildAudioPendingEdit<T>(this IQueryable<T> query) where T : AudioPendingEdit
        {
            return query
                .Include(x => x.Audio)
                .Include(x => x.Genre)
                .Include(x => x.Contributor);
        }
    }
}
