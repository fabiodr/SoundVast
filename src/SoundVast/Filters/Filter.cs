using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using SoundVast.Models;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using Microsoft.EntityFrameworkCore;

namespace SoundVast.Filters
{
    public static class Filter
    {
        public static T GetRandom<T>(this IQueryable<T> source, int randomNumber) where T : Entity
        {
            return source.Single(x => x.Id == randomNumber);
        }

        public static IQueryable<T> WhereAnyIn<T>(this IQueryable<T> source, int[] arrayIds) where T : Entity
        {
            return source.Where(x => arrayIds.Any(z => z == x.Id));
        }

        public static IQueryable<T> ForId<T>(this IQueryable<T> source, int id) where T : Entity
        {
            return source.Where(x => x.Id == id);
        }

        public static IQueryable<int> SelectIds<T>(this IQueryable<T> source) where T : Entity 
        {
            return source.Select(x => x.Id);
        }

        public static IQueryable<T> WhereIdRange<T>(this IQueryable<T> source, int idToStart) where T : Entity
        {
            return source.Where(x => x.Id >= idToStart);
        }

        public static IQueryable<T> WithWhere<T>(this IQueryable<T> source, WhereOption<T> whereOption)
        {
            return source.Where(whereOption.WhereExpression);
        }

        public static IQueryable<T> WithSelect<T>(this IQueryable<T> source, SelectOption<T> selectOption)
        {
            return source.Select(selectOption.SelectExpression);
        }

        public static IOrderedQueryable<T> WithOrdering<T, TKey>(this IQueryable<T> source, OrderingOption<T, TKey> orderingOption)
        {
            return orderingOption.SortDescending ? source.OrderByDescending(orderingOption.OrderingKey) : source.OrderBy(orderingOption.OrderingKey);
        }

        public static IQueryable<T> WithImageFile<T>(this IQueryable<T> source) where T : Audio
        {
            return source.Include(x => x.ImageFile).Cast<T>();
        }

        public static IQueryable<T> EagerLoadProperty<T, TProperty>(this IQueryable<T> source, Expression<Func<T, TProperty>> expression) where T : class
        {
            return source.Include(expression);
        }

        //public static IQueryable<T> WhereLiked<T>(this IQueryable<T> source) where T : Audio
        //{
        //    return source.Where(x => x.Ratings.Any(z => z.Liked));
        //}

        public static IQueryable<T> WhereUser<T>(this IQueryable<T> source, string userId) where T : Audio
        {
            return source.Where(x => x.User.Id == userId);
        }

        public static IQueryable<T> WhereGenre<T>(this IQueryable<T> source, string genre) where T : Audio
        {
            return source.Where(x => x.Genres.Any(z => z.Genre.Name == genre));
        }

        public static IQueryable<T> WhereCategory<T>(this IQueryable<T> source, string category) where T : ICategorizable
        {
            return source.Where(x => x.Category.Name == category);
        }

        public static IQueryable<T> WhereDateFrom<T>(this IQueryable<T> source, DateTime date) where T : Audio
        {
            return source.Where(x => x.UploadDate >= date);
        }
    }
}