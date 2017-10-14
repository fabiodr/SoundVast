//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Text.RegularExpressions;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Configuration;
//using SoundVast.Components.Audio.Models;
//using SoundVast.Repository;
//using SoundVast.Utilities;
//using SoundVast.QueryOptions;
//using SoundVast.Storage.CloudStorage;
//using SoundVast.Storage.CloudStorage.AzureStorage;

//namespace SoundVast.Components.Audio
//{
//    public interface IAudioService<T> where T : Audio
//    {
//        T GetAudio(int id);
//        T GetAudio(int id, params Expression<Func<T, object>>[] includeExpressions);
//      //  T GetAudioForRating(int id);
//        ICollection<T> GetAudios();
//        //ICollection<T> GetAudiosForSearch();
//        //ICollection<T> GetAudiosForSearchTags();
//        //ICollection<T> GetAudiosInGenreAndCategory(string category, string genre);
//        //ICollection<T> GetLikedAudiosForUser(string userId);
//        //ICollection<T> GetAudiosForUser(string userId);
//        //ICollection<T> OrderAudiosInGenreAndCategoryFromDate<TKey>(OrderingOption<T, TKey> orderingOption, DateTime date, string category, string genre);
//        //ICollection<T> GetPlaylist(int idToStart, int numberToTake, string category, string genre);
//        //ICollection<T> GetRelatedAudios(string name, Levenshtein.Match matchEnum);
//        bool Add(T audio);
//      //  bool Edit(T audio, T newFileStream);
//      //  void IncrementView(T audio);
//    }

//    public class AudioService<T> : IAudioService<T> where T : Audio
//    {
//        private readonly IValidationDictionary _validationDictionary;
//        private readonly IRepository<T> _repository;
//        private readonly ICloudStorage _cloudStorage;
//        private readonly IConfiguration _configuration;

//        public AudioService(IValidationDictionary validationDictionary, IRepository<T> repository, ICloudStorage cloudStorage,
//            IConfiguration configuration)
//        {
//            _validationDictionary = validationDictionary;
//            _repository = repository;
//            _cloudStorage = cloudStorage;
//            _configuration = configuration;
//        }

//        protected virtual bool Validate(T audio)
//        {
//            return _validationDictionary.IsValid;
//        }

//        public T GetAudio(int id)
//        {
//            return _repository.Get(id);
//        }

//        //public T GetAudioForRating(int id)
//        //{
//        //    return _repository.GetAll()
//        //        .Include(x => x.AudioRatingJoins)
//        //        .ThenInclude(x => x.AudioRating)
//        //        .Include(x => x.User)
//        //        .Include(x => x.RatingCount)
//        //        .SingleOrDefault(x => x.Id == id);
//        //}

//        public T GetAudio(int id, params Expression<Func<T, object>>[] includeExpressions)
//        {
//            return _repository.Include(includeExpressions).SingleOrDefault(x => x.Id == id);
//        }

//        public ICollection<T> GetAudios()
//        {
//            return _repository.GetAll().ToList();
//        }

//        //public ICollection<T> GetAudiosForSearch()
//        //{
//        //    return _repository.GetAll().Include(x => x.ImageFile).ToList();
//        //}

//        //public ICollection<T> GetAudiosForSearchTags()
//        //{
//        //    return _repository.GetAll().Include(x => x.Category).ToList();
//        //}

//        //public ICollection<T> GetAudiosInGenreAndCategory(string category, string genre)
//        //{
//        //    if (genre != null)
//        //    {
//        //        return _repository.GetAll().Where(x => x.Category.Name == category).Where(x => x.Genres
//        //            .Any(z => z.Genre.Name == genre)).Include(x => x.ImageFile).ToList();
//        //    }
//        //    return _repository.GetAll().Where(x => x.Category.Name == category).Include(x => x.ImageFile).ToList();
//        //}

//        //public ICollection<T> GetLikedAudiosForUser(string userId)
//        //{
//        //    return _repository.GetAll()/*.WhereLiked()*/.Where(x => x.User.Id == userId).ToList();
//        //}

//        //public ICollection<T> GetAudiosForUser(string userId)
//        //{
//        //    return _repository.GetAll().Where(x => x.User.Id == userId).ToList();
//        //}

//        //public ICollection<T> OrderAudiosInGenreAndCategoryFromDate<TKey>(OrderingOption<T, TKey> orderingOption, DateTime date, string category,
//        //    string genre)
//        //{
//        //    if (genre != null)
//        //    {
//        //        return _repository.GetAll().Include(x => x.ImageFile)
//        //            .Where(x => x.Category.Name == category)
//        //            .Where(x => x.Genres.Any(z => z.Genre.Name == genre)).Where(x => x.UploadDate >= date)
//        //                .WithOrdering(orderingOption).ToList();
//        //    }
//        //    return _repository.GetAll().Include(x => x.ImageFile).Where(x => x.Category.Name == category)
//        //        .Where(x => x.UploadDate >= date).WithOrdering(orderingOption).ToList();
//        //}

//        //public ICollection<T> GetPlaylist(int idToStart, int numberToTake, string category, string genre)
//        //{
//        //    if (genre != null)
//        //    {
//        //        return _repository.GetAll().Include(x => x.ImageFile).Cast<T>().Where(x => x.Id >= idToStart)
//        //            .Where(x => x.Category.Name == category)
//        //            .Where(x => x.Genres.Any(z => z.Genre.Name == genre)).Take(numberToTake).ToList();
//        //    }
//        //    return _repository.GetAll().Include(x => x.ImageFile).Cast<T>().Where(x => x.Id >= idToStart)
//        //        .Where(x => x.Category.Name == category).Take(numberToTake).ToList();
//        //}

//        public ICollection<T> GetRelatedAudios(string name, Levenshtein.Match matchEnum)
//        {
//            return _repository.GetAll().ToList().AsQueryable().Where(new WhereOption<T>(x => Levenshtein.iLD(name, x.Name) < (int)matchEnum).WhereExpression).ToList();
//        }
//        public bool IsLesser(int score)
//        {
//            return score <= 30;
//        }

//        public virtual bool Add(T audio)
//        {
//            if (!Validate(audio))
//                return false;

//            _repository.Add(audio);

//            return true;
//        }

//        //public virtual bool Edit(T audio, T newFileStream)
//        //{
//        //    if (!Validate(audio))
//        //        return false;

//        //    audio.Genres.Clear();

//        //    audio.ImageFile.Name = Path.ChangeExtension(newFileStream.ImageFile.Name, "jpg");
//        //    audio.Genres = newFileStream.Genres;

//        //    var blob = _cloudStorage.GetBlob(CloudStorageType.Image, audio.ImageFile.Name);

//        //    blob.UploadFromPathAsync(_configuration["Directory:TempResources"] + audio.ImageFile.Name, "image/jpeg");

//        //    _repository.Save();

//        //    return true;
//        //}

//        //public virtual void IncrementView(T audio)
//        //{
//        //    audio.IncrementView();
//        //    _repository.Save();
//        //}
//    }
//}