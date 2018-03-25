using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Filter;

namespace SoundVast.Components.Filter
{
    public static class FilterExtension
    {
        public static IQueryable<T> TopRated<T>(this IEnumerable<T> audios, int minimumNumberOfRatingsThreshold) where T : Audio.Models.Audio
        {
            var sortedAudios = audios.Where(x => x.Ratings.Count >= minimumNumberOfRatingsThreshold).ToList();

            return sortedAudios.AsQueryable().OrderByDescending(x => x.Likes);
        }

        public static IQueryable<T> MostCommented<T>(this IEnumerable<T> audios) where T : Audio.Models.Audio
        {
            return audios.OrderByDescending(x => x.Comments.Count).AsQueryable();
        }
    }
}
