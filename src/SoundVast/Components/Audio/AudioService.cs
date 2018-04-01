using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Search;
using SoundVast.Components.Upload;
using SoundVast.Components.User;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.Audio
{
    public class AudioService<T> : IAudioService<T> where T : Models.Audio
    {
        private readonly IRepository<T> _repository;
        private readonly IValidationProvider _validationProvider;
        private readonly ICloudStorage _cloudStorage;
        private IRepository<LiveStream.Models.LiveStream> repository;
        private IValidationProvider validationProvider;

        public AudioService(IRepository<T> repository, IValidationProvider validationProvider, ICloudStorage cloudStorage)
        {
            _repository = repository;
            _validationProvider = validationProvider;
            _cloudStorage = cloudStorage;
        }

        public AudioService(IRepository<LiveStream.Models.LiveStream> repository, IValidationProvider validationProvider)
        {
            this.repository = repository;
            this.validationProvider = validationProvider;
        }

        public int GetCount()
        {
            return _repository.GetAll().Count();
        }

        public IEnumerable<T> GetAudios()
        {
            return _repository.GetAll().BuildAudio();
        }

        public virtual IEnumerable<T> GetAudios(string genreName, string searchQuery)
        {
            IEnumerable<T> audios;

            if (searchQuery != null)
            {
                var audioIds = LuceneSearch.SearchAudios(searchQuery);

                //TODO: Filter by correct type in Lucene search instead
                audios = audioIds.Select(id => _repository.GetAll().BuildAudio().SingleOrDefault(x => x.Id == id)).Where(x => x != null);
            }
            else
            {
                audios = _repository.GetAll().BuildAudio();
            }

            if (genreName != null)
            {
                audios = audios.Where(x => x.AudioGenres.Any(z => z.Genre.Name == genreName));
            }

            return audios;
        }

        public void Add(T model)
        {
            _validationProvider.Validate(model);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(model);

                LuceneSearch.AddOrUpdateLuceneIndex(model);
            }
        }

        public Rating.Models.Rating Rate(int audioId, string userId, bool liked)
        {
            var rating = _repository.GetAll().Rate(audioId, userId, liked);

            _repository.Save();

            return rating;
        }
    }
}
