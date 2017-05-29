using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Genre
{
    public interface IGenreService<T> where T : GenreModel
    {
        ICollection<T> GetGenresInCategory(string category);
        ICollection<T> GetGenres();
        T GetGenre(int id);
    }

    public class GenreService<T> : IGenreService<T> where T : GenreModel, new()
    {
        private readonly IRepository<T> _repository;

        public GenreService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public ICollection<T> GetGenresInCategory(string category)
        {
            return _repository.GetAll().Where(x => x.Category.Name == category).ToList();
        }

        public ICollection<T> GetGenres()
        {
            return _repository.GetAll().ToList();
        }

        public T GetGenre(int id)
        {
            return _repository.Get(id);
        }
    }
}