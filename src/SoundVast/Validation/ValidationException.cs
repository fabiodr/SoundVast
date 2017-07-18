using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Validation
{
    public class ValidationException : Exception
    {
        public ValidationException(ICollection<ValidationResult> r)
            : base(GetFirstErrorMessage(r))
        {
            Errors = new ReadOnlyCollection<ValidationResult>(r.ToList());
        }

        public ReadOnlyCollection<ValidationResult> Errors { get; }

        private static string GetFirstErrorMessage(
            IEnumerable<ValidationResult> errors)
        {
            return errors.First().Message;
        }
    }
}
