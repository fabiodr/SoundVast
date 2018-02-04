using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre.Models;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Genre
{
    public class GenreService : IGenreService
    {
        private readonly IRepository<Models.Genre> _repository;
        private readonly ICloudStorage _cloudStorage;

        public GenreService(IRepository<Models.Genre> repository, ICloudStorage cloudStorage)
        {
            _repository = repository;
            _cloudStorage = cloudStorage;
        }

        public void UpdateCoverImages()
        {
            var genres = _repository.GetAll().BuildGenre();
            var placeholderImageUrl = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast").CloudBlockBlob.Uri.AbsoluteUri;

            foreach (var genre in genres)
            {
                var audios = genre.AudioGenres.Select(x => x.Audio);
                var coverImageUrl = audios.TopRated(0).Select(x => x.CoverImageUrl).FirstOrDefault(x => x != placeholderImageUrl);

                if (coverImageUrl != null)
                {
                    genre.CoverImageUrl = coverImageUrl;
                }
            }

            _repository.Save();
        }

        public IEnumerable<Models.Genre> GetGenres()
        {
            return _repository.GetAll();
        }
    }
}