using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Category.Models;

namespace SoundVast.Components.Category
{
    public interface ICategoryService<T> where T : CategoryModel
    {
        ICollection<T> GetCategories();
        ICollection<T> GetSelectedCategories(int[] selectedCategoryIds);
        T GetCategory(int id);
    }

    public class CategoryService<T> : ICategoryService<T> where T : CategoryModel
    {
        private readonly IRepository<T> _repository;

        public CategoryService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public ICollection<T> GetCategories()
        {
            return _repository.GetAll().Include(x => x.ImageFile).ToList();
        }

        public ICollection<T> GetSelectedCategories(int[] selectedCategoryIds)
        {
            return _repository.GetAll().Where(x => selectedCategoryIds.Any(z => z == x.Id)).ToList();
        }

        public T GetCategory(int id)
        {
            return _repository.Get(id);
        }
    }
}