using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Album
{
    public class AlbumService : AudioService<Models.Album>, IAlbumService
    {
        private readonly IRepository<Models.Album> _repository;

        public AlbumService(IRepository<Models.Album> repository, IValidationProvider validationProvider) : 
            base(repository, validationProvider)
        {
            _repository = repository;
        }

        public override IEnumerable<Models.Album> GetAudios(string genreName, string searchQuery, Filter.Filter filter)
        {
            var albums = base.GetAudios(genreName, searchQuery, filter).AsQueryable().BuildAlbum();

            return albums;
        }
    }
}