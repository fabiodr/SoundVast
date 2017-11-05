using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Upload;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;

namespace SoundVast.Components.Audio
{
    public class AudioService<T> : IAudioService<T> where T : Models.Audio
    {
        private readonly IRepository<T> _repository;
        private readonly IValidationProvider _validationProvider;

        public AudioService(IRepository<T> repository, IValidationProvider validationProvider)
        {
            _repository = repository;
            _validationProvider = validationProvider;
        }

        public ICollection<T> GetAudios()
        {
            return _repository.GetAll().BuildAudio().Cast<T>().ToList();
        }

        public ICollection<T> GetAudios(int current, int amount)
        {
            return _repository.GetAll().Include(x => x.Ratings).Skip(current).Take(amount).ToList();
        }

        public T GetAudio(int id)
        {
            return (T)_repository.GetAll().BuildAudio().Single(x => x.Id == id);
        }

        public ICollection<Rating.Models.Rating> GetAudioRatings(int id)
        {
            return _repository.GetAll().Include(x => x.Ratings).Single(x => x.Id == id).Ratings;
        }

        public void Add(T model)
        {
            _validationProvider.Validate(model);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(model);
            }
        }

        public Rating.Models.Rating RateAudio(int audioId, string userId, bool liked)
        {
            var audio = _repository.Include(x => x.Ratings).Single(x => x.Id == audioId);
            var rating = audio.Ratings?.SingleOrDefault(x => x.UserId == userId);

            if (rating != null)
            {
                if (rating.Liked == liked)
                {
                    audio.Ratings.Remove(rating);
                }
                else
                {
                    rating.Liked = liked;
                }
            } else
            {
                rating = new Rating.Models.Rating
                {
                    AudioId = audioId,
                    UserId = userId,
                    Liked = liked
                };

                audio.Ratings.Add(rating);
            }

            _repository.Save();

            return rating;
        }
    }
}
