using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Quote.Models;
using SoundVast.Repository;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public class StreamDataService : IStreamDataService
    {
        private readonly IRepository<StreamData> _repository;

        public StreamDataService(IRepository<StreamData> repository)
        {
            _repository = repository;
        }

        public StreamData GetStreamData(int id)
        {
            return _repository.Get(id);
        }
    }
}