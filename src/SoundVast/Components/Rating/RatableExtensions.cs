using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Components.Rating
{
    public static class RatableExtensions
    {
        public static Models.Rating Rate(this IQueryable<IRatable> ratables, int objectToRateId, string userId, bool liked)
        {
            var objectToRate = ratables.Include(x => x.Ratings).Single(x => x.Id == objectToRateId);
            var rating = objectToRate.Ratings.SingleOrDefault(x => x.UserId == userId);

            if (rating != null)
            {
                if (rating.Liked == liked)
                {
                    objectToRate.Ratings.Remove(rating);
                }

                rating.Liked = liked;
            }
            else
            {
                rating = new Models.Rating
                {
                    UserId = userId,
                    Liked = liked
                };

                objectToRate.Ratings.Add(rating);
            }

            return rating;
        }
    }
}
