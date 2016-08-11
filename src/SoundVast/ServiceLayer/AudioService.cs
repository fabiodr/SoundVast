using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using SoundVast.Filters;
using SoundVast.Models.IdentityModels;
using SoundVast.Repository;
using SoundVast.Utilities;
using SoundVast.QueryOptions;

namespace SoundVast.ServiceLayer
{
    public interface IAudioService<T> where T : Audio
    {
        T GetAudio(int id);
        T GetAudio(int id, params Expression<Func<T, object>>[] includeExpressions);
        T GetAudioForRating(int id);
        ICollection<T> GetAudios();
        ICollection<T> GetAudiosForSearch();
        ICollection<T> GetAudiosForSearchTags();
        ICollection<T> GetAudiosInGenreAndCategory(string category, string genre);
        ICollection<T> GetLikedAudiosForUser(string userId);
        ICollection<T> GetAudiosForUser(string userId);
        ICollection<T> OrderAudiosInGenreAndCategoryFromDate<TKey>(OrderingOption<T, TKey> orderingOption, DateTime date, string category, string genre);
        ICollection<T> GetPlaylist(int idToStart, int numberToTake, string category, string genre);
        ICollection<T> GetRelatedAudios(string name, Levenshtein.Match matchEnum);
        bool Add(T audio);
        bool Edit(T audio, T newFileStream);
        void IncrementView(T audio);
    }

    public class AudioService<T> : IAudioService<T> where T : Audio
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<T> _repository;
        private readonly IAzureConfig _azureConfig;

        public AudioService(IValidationDictionary validationDictionary, IRepository<T> repository, IAzureConfig azureConfig)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
            _azureConfig = azureConfig;
        }

        protected virtual bool Validate(T audio)
        {
            return _validationDictionary.IsValid;
        }

        public T GetAudio(int id)
        {
            return _repository.Get(id);
        }

        public T GetAudioForRating(int id)
        {
            return _repository.GetAll()
                .Include(x => x.AudioRatingJoins)
                .ThenInclude(x => x.AudioRating)
                .Include(x => x.User)
                .Include(x => x.RatingCount)
                .SingleOrDefault(x => x.Id == id);
        }

        public T GetAudio(int id, params Expression<Func<T, object>>[] includeExpressions)
        {
            return _repository.Include(includeExpressions).SingleOrDefault(x => x.Id == id);
        }

        public ICollection<T> GetAudios()
        {
            return _repository.GetAll().ToList();
        }

        public ICollection<T> GetAudiosForSearch()
        {
            return _repository.GetAll().Include(x => x.ImageFile).ToList();
        }

        public ICollection<T> GetAudiosForSearchTags()
        {
            return _repository.GetAll().Include(x => x.Category).ToList();
        }

        public ICollection<T> GetAudiosInGenreAndCategory(string category, string genre)
        {
            return genre != null ? _repository.GetAll().WhereCategory(category).WhereGenre(genre).Include(x => x.ImageFile).ToList()
                                   : _repository.GetAll().WhereCategory(category).Include(x => x.ImageFile).ToList();
        }

        public ICollection<T> GetLikedAudiosForUser(string userId)
        {
            return _repository.GetAll()/*.WhereLiked()*/.WhereUser(userId).ToList();
        }

        public ICollection<T> GetAudiosForUser(string userId)
        {
            return _repository.GetAll().WhereUser(userId).ToList();
        }

        public ICollection<T> OrderAudiosInGenreAndCategoryFromDate<TKey>(OrderingOption<T, TKey> orderingOption, DateTime date, string category, 
            string genre)
        {
            return genre != null ? _repository.GetAll().Include(x => x.ImageFile).WhereCategory(category).WhereGenre(genre).WhereDateFrom(date).WithOrdering(orderingOption).ToList()
                                   : _repository.GetAll().Include(x => x.ImageFile).WhereCategory(category).WhereDateFrom(date).WithOrdering(orderingOption).ToList();
        }

        public ICollection<T> GetPlaylist(int idToStart, int numberToTake, string category, string genre)
        {
            return genre != null ? _repository.GetAll().WithImageFile().WhereIdRange(idToStart).WhereCategory(category).WhereGenre(genre).Take(numberToTake).ToList()
                                 : _repository.GetAll().WithImageFile().WhereIdRange(idToStart).WhereCategory(category).Take(numberToTake).ToList();
        }

        public ICollection<T> GetRelatedAudios(string name, Levenshtein.Match matchEnum)
        {
            return _repository.GetAll().ToList().AsQueryable().WithWhere(new WhereOption<T>(x => Levenshtein.iLD(name, x.Name) < (int)matchEnum)).ToList();
        }
        public bool IsLesser(int score)
        {
            return score <= 30;
        }

        public virtual bool Add(T audio)
        {
            if (!Validate(audio))
                return false;

            _repository.Add(audio);

            return true;
        }

        public virtual bool Edit(T audio, T newFileStream)
        {
            if (!Validate(audio))
                return false;

            var uploadData = new UploadData(_azureConfig);

            audio.Genres.Clear();

            audio.ImageFile.Name = Path.ChangeExtension(newFileStream.ImageFile.Name, "jpg");
            audio.Genres = newFileStream.Genres;

            uploadData.UploadFileFromTemp(_azureConfig.ContainerImage, _azureConfig.ImageConverterResource.RootPath + audio.ImageFile.Name,
                    audio.ImageFile.Name, "image/jpeg");

            _repository.Save();

            return true;
        }

        public virtual void IncrementView(T audio)
        {
            audio.IncrementView();
            _repository.Save();
        }
    }
}