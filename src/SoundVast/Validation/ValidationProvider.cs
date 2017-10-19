using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    internal sealed class ValidationProvider : IValidationProvider
    {
        private readonly Func<Type, IValidator> _validatorFactory;
        public IDictionary<string, ICollection<string>> ValidationErrors { get; } = new Dictionary<string, ICollection<string>>();
        public bool HasErrors => ValidationErrors.Any();
  
        public ValidationProvider(Func<Type, IValidator> validatorFactory)
        {
            _validatorFactory = validatorFactory;
        }

        public void Validate(object entity)
        {
            var validationResults = _validatorFactory(entity.GetType()).Validate(entity).ToArray();

            foreach (var validationResult in validationResults)
            {
                if (ValidationErrors.ContainsKey(validationResult.Key))
                {
                    var validationError = ValidationErrors[validationResult.Key];

                    validationError.Add(validationResult.Message);
                }
                else
                {
                    ValidationErrors[validationResult.Key] = new List<string> { validationResult.Message };
                }
            }
        }
    }
}
