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
using SoundVast.Validation;

namespace SoundVast.Components.Genre
{
    public class SongGenreService : GenreService<SongGenre>, ISongGenreService
    {
        private readonly IRepository<SongGenre> _repository;

        public SongGenreService(IRepository<SongGenre> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
