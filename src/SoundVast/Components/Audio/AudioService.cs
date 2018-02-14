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

namespace SoundVast.Components.Audio
{
    public class AudioService<T> : IAudioService<T> where T : Models.Audio
    {
        private readonly IRepository<T> _repository;
        private readonly IValidationProvider _validationProvider;

        public AudioService(IRepository<T> repository, IValidationProvider validationProvider)
        {
            _repository = repository;
            _validationProvider = validationProvider;
        }

        public IEnumerable<T> GetAudios()
        {
            return _repository.GetAll().BuildAudio();
        }

        public virtual IEnumerable<T> GetAudios(string genreName, string searchQuery, Filter.Filter filter)
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

            if (filter != null)
            {
                if (filter.RatingFilter.TopRated)
                {
                    audios = audios.TopRated(filter.RatingFilter.MinimumNumberOfRatingsThreshold);
                }

                if (filter.MostCommented)
                {
                    audios = audios.MostCommented();
                }

                if (filter.MostPlayed)
                {
                    audios = audios.MostPlayed();
                }
            }


            return audios;
        }

        public virtual T GetAudio(int id)
        {
            return _repository.GetAll().BuildAudio().Single(x => x.Id == id);
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

        public T UpdatePlayCount(int audioId)
        {
            var audio = _repository.Get(audioId);

            audio.PlayCount++;

            _repository.Save();

            return audio;
        }

        public Rating.Models.Rating Rate(int audioId, string userId, bool liked)
        {
            var rating = _repository.GetAll().Rate(audioId, userId, liked);

            _repository.Save();

            return rating;
        }
    }
}
