using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Filters;
using SoundVast.Models;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;

namespace SoundVast.ServiceLayer
{
    public interface IGenreService<T> where T : Genre
    {
        ICollection<T> GetGenresInCategory(string category);
        ICollection<T> GetGenres();
        T GetGenre(int id);
    }

    public class GenreService<T> : IGenreService<T> where T : Genre, new()
    {
        private readonly IRepository<T> _repository;

        public GenreService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public ICollection<T> GetGenresInCategory(string category)
        {
            return _repository.GetAll().WhereCategory(category).ToList();
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