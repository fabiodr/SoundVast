using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Edit
{
    public class AudioPendingEditService<T> : IAudioPendingEditService<T> where T : AudioPendingEdit
    {
        private readonly IRepository<T> _repository;
        private readonly IValidationProvider _validationProvider;

        public AudioPendingEditService(IRepository<T> repository, IValidationProvider validationProvider)
        {
            _repository = repository;
            _validationProvider = validationProvider;
        }

        public void Add(T model)
        {
            _validationProvider.Validate(model);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(model);
            }
        }

        public T Get(int id)
        {
            return _repository.GetAll().BuildAudioPendingEdit().Single(x => x.Id == id);
        }

        public IEnumerable<T> GetAudiosPendingEdit()
        {
            return _repository.GetAll().BuildAudioPendingEdit();
        }

        public void Delete(T model)
        {
            _repository.Remove(model);
        }
    }
}