using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    public interface IValidationProvider
    {
        IDictionary<string, ICollection<string>> ValidationErrors { get; }
        bool HasErrors { get; }
  
        void Validate(object entity);
    }
}
