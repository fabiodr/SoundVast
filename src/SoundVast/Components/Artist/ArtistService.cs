using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Artist
{
    public class ArtistService : AudioService<Models.Artist>, IArtistService
    {
        private readonly IRepository<Models.Artist> _repository;

        public ArtistService(IRepository<Models.Artist> repository, IValidationProvider validationProvider) :
            base(repository, validationProvider)
        {
            _repository = repository;
        }

        public override IEnumerable<Models.Artist> GetAudios(string genreName, string searchQuery, Filter.Filter filter)
        {
            var artists = base.GetAudios(genreName, searchQuery, filter).AsQueryable().BuildArtist();

            return artists;
        }
    }
}