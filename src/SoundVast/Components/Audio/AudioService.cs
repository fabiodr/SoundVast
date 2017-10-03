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
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;

namespace SoundVast.Components.Audio
{
    public class AudioService<T> : IAudioService<T> where T : AudioModel
    {
        private readonly IRepository<T> _repository;
        private readonly IValidationProvider _validationProvider;
        private readonly IAudioValidator _audioValidator;

        public AudioService(IRepository<T> repository, IValidationProvider validationProvider, IAudioValidator audioValidator)
        {
            _repository = repository;
            _validationProvider = validationProvider;
            _audioValidator = audioValidator;
        }

        public ICollection<T> GetAudios(int current, int amount)
        {
            return _repository.GetAll().Include(x => x.Ratings).Skip(current).Take(amount).ToList();
        }

        public T GetAudio(int id)
        {
            return _repository.Get(id);
        }

        public ICollection<RatingModel> GetAudioRatings(int id)
        {
            return _repository.GetAll().Include(x => x.Ratings).Single(x => x.Id == id).Ratings;
        }

        public async Task UploadCoverImage(ICloudBlob blob, Stream stream, string contentType)
        {
            var fileSize = ByteSize.FromBytes(stream.Length);

            _audioValidator.ValidateUploadCoverImage(fileSize.MegaBytes);

            await blob.UploadFromStreamAsync(stream, contentType);
        }

        public void Add(T model)
        {
            _validationProvider.Validate(model);

            _repository.Add(model);
        }

        public RatingModel RateAudio(int audioId, bool liked, string userId)
        {
            var audio = _repository.Include(x => x.Ratings).Single(x => x.Id == audioId);
            var rating = audio.Ratings?.SingleOrDefault(x => x.UserId == userId);

            if (rating != null)
            {
                rating.Liked = liked;
            }
            else
            {
                rating = new RatingModel
                {
                    Liked = liked,
                    UserId = userId,
                    AudioId = audioId
                };
                audio.Ratings.Add(rating);
            }

            _repository.Save();

            return rating;
        }
    }
}
