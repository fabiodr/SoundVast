using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;

namespace SoundVast.Components.Genre
{
    public class SongGenreService : GenreService<SongGenre>, ISongGenreService
    {
        private readonly IRepository<SongGenre> _repository;
        private readonly ICloudStorage _cloudStorage;

        public SongGenreService(IRepository<SongGenre> repository, ICloudStorage cloudStorage) 
            : base(repository, cloudStorage)
        {
            _repository = repository;
            _cloudStorage = cloudStorage;
        }
    }
}
