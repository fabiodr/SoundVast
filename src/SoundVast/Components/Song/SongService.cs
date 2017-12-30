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

        public override Models.Song Edit(int existingAudioId, Models.Song newModel)
        {
            var song = base.Edit(existingAudioId, newModel);

            song.ArtistSongs = newModel.ArtistSongs;
            song.Free = newModel.Free;

            _repository.Save();

            return song;
        }
    }
}
