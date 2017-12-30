using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;

namespace SoundVast.Components.Album
{
    public class AlbumService : IAlbumService
    {
        private readonly IRepository<Models.Album> _repository;

        public AlbumService(IRepository<Models.Album> repository)
        {
            _repository = repository;
        }

        public IEnumerable<Models.Album> GetAlbums()
        {
            return _repository.GetAll().BuildAlbum();
        }
    }
}