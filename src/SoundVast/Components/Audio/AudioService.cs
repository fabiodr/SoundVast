using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
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

        public AudioModel GetSong(int id)
        {
            return _repository.Get(id);
        }
    }
}
