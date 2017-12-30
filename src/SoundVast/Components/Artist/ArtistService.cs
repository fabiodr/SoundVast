using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;

namespace SoundVast.Components.Artist
{
    public class ArtistService : IArtistService
    {
        private readonly IRepository<Models.Artist> _repository;

        public ArtistService(IRepository<Models.Artist> repository)
        {
            _repository = repository;
        }

        public IEnumerable<Models.Artist> GetArtists()
        {
            return _repository.GetAll().BuildArtist();
        }
    }
}