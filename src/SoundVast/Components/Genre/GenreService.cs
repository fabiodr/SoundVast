using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Filter;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Genre
{
    public class GenreService : IGenreService
    {
        private readonly IRepository<Models.Genre> _repository;
        private readonly ICloudStorage _cloudStorage;

        public GenreService(IRepository<Models.Genre> repository, ICloudStorage cloudStorage)
        {
            _repository = repository;
            _cloudStorage = cloudStorage;
        }

        public void UpdateCoverImages()
        {
            var genres = _repository.GetAll().BuildGenre();
            var placeholderImageName = Image.PlaceholderImageName;

            foreach (var genre in genres)
            {
                var audios = genre.AudioGenres.Select(x => x.Audio);
                var coverImageName = audios.TopRated(0).Select(x => x.CoverImageName).FirstOrDefault();

                genre.CoverImageName = coverImageName;
            }

            _repository.Save();
        }

        public void Add(Models.Genre model)
        {
            _repository.Add(model);
        }

        public IEnumerable<Models.Genre> GetGenres()
        {
            return _repository.GetAll();
        }
    }
}