using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Upload;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;
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

        public virtual IEnumerable<T> GetAudios(string genreName, Filter.Filter filter)
        {
            var audios = _repository.GetAll().BuildAudio();

            if (genreName != null)
            {
                audios = audios.Where(x => x.AudioGenres.Any(z => z.Genre.Name == genreName));
            }

            if (filter.RatingFilter.TopRated)
            {
                audios = audios.TopRated(filter.RatingFilter.MinimumNumberOfRatingsThreshold);
            }

            if (filter.MostCommented)
            {
                audios = audios.MostCommented();
            }

            if (filter.MostPlayed)
            {
                audios = audios.MostPlayed();
            }

            return audios;
        }

        public IEnumerable<T> GetAudiosForUser(string userId)
        {
            return _repository.GetAll().BuildAudio().Where(x => x.UserId == userId);
        }

        public IEnumerable<T> GetUserLikedAudios(string userId)
        {
            return _repository.GetAll().BuildAudio().Where(x => x.Ratings.Any(z => z.Liked && z.UserId == userId));
        }

        public ICollection<T> GetAudios(int current, int amount)
        {
            return _repository.GetAll().Include(x => x.Ratings).Skip(current).Take(amount).ToList();
        }

        public T GetAudio(int? id)
        {
            if (!id.HasValue)
            {
                return null;
            }
            return _repository.GetAll().BuildAudio().Single(x => x.Id == id.Value);
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

                model.User.ContributionScore += (int)Contribution.Upload;
            }
        }

        public virtual T Edit(int existingAudioId, T newModel)
        {
            _validationProvider.Validate(newModel);

            if (!_validationProvider.HasErrors)
            {
                var audio = _repository.Get(existingAudioId);

                audio.CoverImageUrl = newModel.CoverImageUrl;
                audio.Name = newModel.Name;
                audio.UserId = newModel.UserId;

                _repository.Save();

                return audio;
            }

            return null;
        }

        public T UpdatePlayCount(int audioId)
        {
            var audio = _repository.Get(audioId);

            audio.PlayCount++;

            _repository.Save();

            return audio;
        }

        public Rating.Models.Rating Rate(int audioId, string userId, bool liked)
        {
            var rating = _repository.GetAll().Rate(audioId, userId, liked);

            _repository.Save();

            return rating;
        }
    }
}
