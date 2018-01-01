using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Genre
{
    public class GenreService<T> : IGenreService<T> where T : Models.Genre
    {
        private readonly IRepository<T> _repository;

        public GenreService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public void UpdateCoverImages()
        {
            var genres = _repository.GetAll();

            foreach (var genre in genres)
            {
                var coverImageUrl = genre.AudioGenres.Select(x => x.Audio.CoverImageUrl).FirstOrDefault();

                if (coverImageUrl != null)
                {
                    genre.CoverImageUrl = coverImageUrl;
                }
            }

            _repository.Save();
        }

        public IEnumerable<T> GetGenres()
        {
            return _repository.GetAll().Include(x => x.AudioGenres).ThenInclude(x => x.Genre);
        }
    }
}