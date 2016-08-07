using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using SoundVast.CustomHelpers;
using SoundVast.Data;

namespace SoundVast.Repository
{
    public interface IRepository<T> : IDisposable where T : class
    {
        IQueryable<T> GetAll();
        T Get(int id);
        IQueryable<T> Include(params Expression<Func<T, object>>[] paths);
        void Add(T item);
        void Remove(T item);
        void RemoveRange(IEnumerable<T> items);
        void Attach(T entity);
        void Save();
    }

    public class Repository<T, TC> : IRepository<T> 
        where T : class 
        where TC : DbContext
    {
        private bool _disposed;

        protected TC Context { get; }

        public Repository()
        {
            
        }

        public Repository(TC context)
        {
            Context = context;
        }

        public virtual IQueryable<T> GetAll()
        {
            return Context.Set<T>();
        }

        public virtual T Get(int id)
        {
            return Context.Set<T>().Find(id);
        }

        public IQueryable<T> Include(params Expression<Func<T, object>>[] paths)
        {
            var query = Context.Set<T>().AsQueryable();

            return paths.Aggregate(query, (current, path) => current.Include(path));
        }

        public virtual void Add(T entity)
        {
            Context.Set<T>().Add(entity);
            Save();
        }

        public void RemoveRange(IEnumerable<T> items)
        {
            Context.Set<T>().RemoveRange(items);
            Save();
        }

        public virtual void Remove(T entity)
        {
            Context.Set<T>().Remove(entity);
            Save();
        }

        public virtual void Attach(T entity)
        {
            Context.Set<T>().Attach(entity);
        }

        public virtual void Save()
        {
            Context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed && disposing)
            {
                Context.Dispose();
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}