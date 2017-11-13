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
        private readonly IRepository<Models.Genre> _repository;

        public GenreService(IRepository<Models.Genre> repository)
        {
            _repository = repository;
        }

        //public ICollection<Genre> GetGenresInCategory(string category)
        //{
        //    return _repository.GetAll().Where(x => x.Category.Name == category).ToList();
        //}

        public ICollection<Models.Genre> GetGenres()
        {
            return _repository.GetAll().ToList();
        }
    }
}