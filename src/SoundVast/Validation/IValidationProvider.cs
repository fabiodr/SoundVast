using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    public interface IValidationProvider
    {
        void Validate(object entity);
        void ValidateAll(IEnumerable entities);
    }
}
