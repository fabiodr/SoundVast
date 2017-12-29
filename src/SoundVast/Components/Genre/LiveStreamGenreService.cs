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
    public class LiveStreamGenreService : GenreService<LiveStreamGenre>, ILiveStreamGenreService
    {
        private readonly IRepository<LiveStreamGenre> _repository;

        public LiveStreamGenreService(IRepository<LiveStreamGenre> repository) : base(repository)
        {
            _repository = repository;
        }
    }
}
