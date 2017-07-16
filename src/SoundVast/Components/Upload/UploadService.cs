using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Repository;

namespace SoundVast.Components.Upload
{
    public class UploadService : IUploadService
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<AudioModel> _repository;

        public UploadService(IValidationDictionary validationDictionary, IRepository<AudioModel> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        protected bool Validate(AudioModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                _validationDictionary.SetError("Name", "Name is required");
            }

            return _validationDictionary.IsValid;
        }

        public bool Add(AudioModel model)
        {
            if (!Validate(model))
                return false;

            _repository.Add(model);

            return true;
        }
    }
}
