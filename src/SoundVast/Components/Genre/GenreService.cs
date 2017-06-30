using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Genre
{
    public class GenreService : IGenreService
    {
        private readonly IRepository<GenreModel> _repository;

        public GenreService(IRepository<GenreModel> repository)
        {
            _repository = repository;
        }

        public ICollection<GenreModel> GetGenresInCategory(string category)
        {
            return _repository.GetAll().Where(x => x.Category.Name == category).ToList();
        }

        public ICollection<GenreModel> GetGenres()
        {
            return _repository.GetAll().ToList();
        }

        public GenreModel GetGenre(int id)
        {
            return _repository.Get(id);
        }
    }
}