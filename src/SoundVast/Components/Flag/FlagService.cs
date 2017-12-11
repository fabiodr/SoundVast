using System.Collections.Generic;
using SoundVast.Repository;
using System.Linq;
using SoundVast.Components.Flag.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Flag
{
    public class FlagService : IFlagService
    {
        private readonly IRepository<Models.Flag> _repository;
        private readonly IValidationProvider _validationProvider;

        public FlagService(IRepository<Models.Flag> repository, IValidationProvider validationProvider)
        {
            _repository = repository;
            _validationProvider = validationProvider;
        }

        public void Add(Models.Flag model)
        {
            _validationProvider.Validate(model);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(model);
            }
        }
    }
}