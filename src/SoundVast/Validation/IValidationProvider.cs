using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    public interface IValidationProvider
    {
        ICollection<KeyValuePair<string, string>> ModelErrors { get; }
        bool HasErrors { get; }
  
        void Validate(object entity);
        void ValidateAll(IEnumerable entities);
        void AddModelErrors(ValidationException exception);
    }
}
