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

        public virtual IEnumerable<T> GetAudios(string genreName, Filter filter)
        {
            var audios = _repository.GetAll().BuildAudio().AsQueryable();

            if (genreName != null)
            {
                audios = audios.Where(x => x.Genre.Name == genreName);
            }

            Func<T, int, bool> dateFromFilter = (x, days) =>
            {
                return DateTime.UtcNow.AddDays(-days) < x.UploadDate;
            };

            if (filter.TopRatedDays.HasValue)
            {
                audios = audios.Where(x => dateFromFilter(x, filter.TopRatedDays.Value));
                audios = audios.OrderByDescending(x => x.Likes);
            }

            if (filter.Newest)
            {
                audios = audios.OrderByDescending(x => x.UploadDate);
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

        public T GetAudio(int id)
        {
            return _repository.GetAll().BuildAudio().Single(x => x.Id == id);
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

                _repository.Save();
            }
        }

        public virtual bool Edit(int existingAudioId, T newModel)
        {
            _validationProvider.Validate(newModel);

            if (!_validationProvider.HasErrors)
            {
                var audio = _repository.Get(existingAudioId);

                audio.CoverImageUrl = newModel.CoverImageUrl;
                audio.Name = newModel.Name;
                audio.GenreId = newModel.GenreId;
                audio.UserId = newModel.UserId;

                _repository.Save();

                return true;
            }

            return false;
        }
    }
}
