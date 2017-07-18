using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    public abstract class Validator<T> : IValidator
    {
        IEnumerable<ValidationResult> IValidator.Validate(object entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            return Validate((T)entity);
        }

        protected abstract IEnumerable<ValidationResult> Validate(T entity);
    }
}
