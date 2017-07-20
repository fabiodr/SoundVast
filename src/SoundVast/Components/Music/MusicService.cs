using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Repository;

namespace SoundVast.Components.Music
{
    public class MusicService : IMusicService
    {
        private readonly IRepository<AudioModel> _repository;

        public MusicService(IRepository<AudioModel> repository)
        {
            _repository = repository;
        }

        public ICollection<AudioModel> GetMusic()
        {
            return _repository.GetAll().Where(x => x.Genre.GenreType == nameof(GenreType.Music)).ToList();
        }
    }
}
