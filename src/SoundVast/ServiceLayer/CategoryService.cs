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
    public interface ICategoryService<T> where T : Category
    {
        ICollection<T> GetCategories();
        ICollection<T> GetSelectedCategories(int[] selectedCategoryIds);
        T GetCategory(int id);
    }

    public class CategoryService<T> : ICategoryService<T> where T : Category
    {
        private readonly IRepository<T> _repository;

        public CategoryService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public ICollection<T> GetCategories()
        {
            return _repository.GetAll().ToList();
        }

        public ICollection<T> GetSelectedCategories(int[] selectedCategoryIds)
        {
            return _repository.GetAll().WhereAnyIn(selectedCategoryIds).ToList();
        }

        public T GetCategory(int id)
        {
            return _repository.Get(id);
        }
    }
}