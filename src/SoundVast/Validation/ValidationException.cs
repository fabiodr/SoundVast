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
        public ValidationException(ValidationResult validationResult)
            : base(validationResult.Message)
        {
            Errors = new ReadOnlyCollection<ValidationResult>(new List<ValidationResult> { validationResult });
        }

        public ValidationException(ICollection<ValidationResult> validationResults)
            : base(GetFirstErrorMessage(validationResults))
        {
            Errors = new ReadOnlyCollection<ValidationResult>(validationResults.ToList());
        }

        public ReadOnlyCollection<ValidationResult> Errors { get; }

        private static string GetFirstErrorMessage(
            IEnumerable<ValidationResult> errors)
        {
            return errors.First().Message;
        }
    }
}
