using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Song
{
    public class SongService : AudioService<Models.Song>, ISongService
    {
        private readonly IRepository<Models.Song> _repository;

        public SongService(IRepository<Models.Song> repository, IValidationProvider validationProvider) : 
            base(repository, validationProvider)
        {
            _repository = repository;
        }

        public override bool Edit(int existingAudioId, Models.Song newModel)
        {
            var succeeded = base.Edit(existingAudioId, newModel);

            if (succeeded)
            {
                var audio = _repository.Get(existingAudioId);

                audio.Artist = newModel.Artist;
                audio.Free = newModel.Free;

                _repository.Save();
            }

            return succeeded;
        }
    }
}
