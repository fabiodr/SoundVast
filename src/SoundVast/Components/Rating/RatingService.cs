using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Rating
{
    public class RatingService<T> : IRatingService<T> where T : IRatable
    {
        private readonly IRepository<T> _repository;

        public RatingService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public Models.Rating Rate(int ratableId, string userId, bool liked)
        {
            var ratable = _repository.Include(x => x.Ratings).Single(x => x.Id == ratableId);
            var rating = ratable.Ratings?.SingleOrDefault(x => x.UserId == userId);

            if (rating != null)
            {
                if (rating.Liked == liked)
                {
                    ratable.Ratings.Remove(rating);
                }
                else
                {
                    rating.Liked = liked;
                }
            }
            else
            {
                rating = new Models.Rating
                {
                    UserId = userId,
                    Liked = liked
                };

                ratable.Ratings.Add(rating);
            }

            _repository.Save();

            return rating;
        }
    }
}
