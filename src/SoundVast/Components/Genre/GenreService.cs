using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Genre
{
    public class GenreService : IGenreService
    {
        private readonly IRepository<Models.Genre> _repository;

        public GenreService(IRepository<Models.Genre> repository)
        {
            _repository = repository;
        }

        public void UpdateCoverImages()
        {
            var genres = _repository.GetAll();

            foreach (var genre in genres)
            {
                var coverImageUrl = genre.Audios.Select(x => x.CoverImageUrl).FirstOrDefault();

                if (coverImageUrl != null)
                {
                    genre.CoverImageUrl = coverImageUrl;
                }
            }

            _repository.Save();
        }

        public ICollection<Models.Genre> GetGenres()
        {
            return _repository.GetAll().Include(x => x.Audios).ToList();
        }
    }
}