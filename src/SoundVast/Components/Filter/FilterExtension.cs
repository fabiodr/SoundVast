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
        private static IQueryable<T> FromDateFilter<T>(IQueryable<T> audios, IDateFilter dateFilter) where T : Audio.Models.Audio
        {
            var fromDateTime = DateTime.UtcNow.AddDays(-dateFilter.From);
            var toDateTime = DateTime.UtcNow.AddDays(-dateFilter.To);

            return audios.Where(x => x.DateAdded < fromDateTime && x.DateAdded > toDateTime);
        }

        public static IQueryable<T> TopRated<T>(this IQueryable<T> audios, Filter filter) where T : Audio.Models.Audio
        {
            if (filter == null || !filter.RatingFilter.TopRated) return audios;

            var sortedAudios = audios.Where(x => x.Ratings.Count >= filter.RatingFilter.MinimumNumberOfRatingsThreshold)
                .ToList().OrderByDescending(x => x.Likes);

            return sortedAudios.AsQueryable();
        }

        public static IQueryable<T> MostCommented<T>(this IQueryable<T> audios, Filter filter) where T : Audio.Models.Audio
        {
            if (filter == null || !filter.CommentFilter.MostCommented) return audios;

            return FromDateFilter(audios, filter.CommentFilter).OrderByDescending(x => x.Comments.Count);
        }

        public static IQueryable<T> MostPlayed<T>(this IQueryable<T> audios, Filter filter) where T : Audio.Models.Audio
        {
            if (filter == null || !filter.PlayedFilter.MostPlayed) return audios;

            return FromDateFilter(audios, filter.PlayedFilter).OrderByDescending(x => x.PlayCount);
        }

        public static IQueryable<T> Newest<T>(this IQueryable<T> audios, Filter filter) where T : Audio.Models.Audio
            {
                if (filter == null || !filter.Newest) return audios;
            
                return audios.OrderByDescending(x => x.DateAdded);
            }
        }
}
