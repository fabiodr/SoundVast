using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using SoundVast.Filters;
using SoundVast.Models.IdentityModels;
using System.Linq.Expressions;

namespace SoundVast.ServiceLayer
{
    public interface IRatingService<T> where T : Rating
    {
        T GetRating(int id, params Expression<Func<T, object>>[] includeExpressions);
        bool Add(Rating rating, T newRating, T existingRating, bool liked);
    }

    public class RatingService<T> : IRatingService<T> where T : Rating
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<T> _repository;

        public RatingService(IValidationDictionary validationDictionary, IRepository<T> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        protected bool Validate(T rating)
        {
            return _validationDictionary.IsValid;
        }

        //private void ModifyRating(Rating rating, bool liked, RatingValue value)
        //{
        //    if (liked)
        //    {
        //        rating.Audio.Rating.ModifyLike(value);
        //    }
        //    else
        //    {
        //        rating.Audio.Rating.ModifyDislike(value);
        //    }
        //}

        public bool Add(Rating rating, T newRating, T existingRating, bool liked)
        {
            //Rating already exists 
            if (existingRating != null)
            {
                //Delete the rating
                _repository.Remove(existingRating);

                if (existingRating.Liked == liked)
                {
                    //If the user clicked on the same button again then remove the like or dislike
                 //   ModifyRating(rating, liked, RatingValue.Decrement);
                }
                //User clicked on the other button but the like/dislike also exists for that so remove it
                else
                {
                 //   ModifyRating(rating, !liked, RatingValue.Decrement);
                }
                _repository.Save();
            }

            //If user clicked on the other rating or none have been clicked
            if (existingRating?.Liked != liked)
            {
              //  ModifyRating(rating, liked, RatingValue.Increment);

                if (!Validate(newRating))
                    return false;

                _repository.Add(newRating);
            }
            return true;
        }

        public T GetRating(int id, params Expression<Func<T, object>>[] includeExpressions)
        {
            return _repository.Include(includeExpressions).SingleOrDefault(x => x.Id == id);
        }
    }
}