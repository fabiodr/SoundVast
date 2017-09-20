using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Repository;

namespace SoundVast.Components.Audio
{
    public class AudioService : IAudioService
    {
        private readonly IRepository<AudioModel> _repository;

        public AudioService(IRepository<AudioModel> repository)
        {
            _repository = repository;
        }

        public ICollection<AudioModel> GetSongs(int current, int amount)
        {
            return _repository.GetAll().Where(x => x.Genre.GenreType == nameof(GenreType.Song)).Skip(current).Take(amount).ToList();
        }

        public AudioModel GetAudio(int id)
        {
            return _repository.Get(id);
        }

        public void RateAudio(int id, bool liked, string userId)
        {
            var audio = _repository.Get(id);

            audio.Rating = new List<RatingModel>{
                new RatingModel {
                    Liked = liked,
                    UserId = userId
                }
            };

            _repository.Add();

            _repository.Save();
        }
    }
}
