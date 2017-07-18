using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public class UploadValidator : Validator<AudioModel>/*, IUploadValidator*/
    {
        private const int MaxImageUploadSize = 2;

        protected override IEnumerable<ValidationResult> Validate(AudioModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                yield return new ValidationResult("Name", "Name is required");
            }
        }

        //public IEnumerable<ValidationResult> ValidateUploadCoverImage(double fileSize)
        //{
        //    if (fileSize > MaxImageUploadSize)
        //    {
        //        yield return new ValidationResult("_error", "Maximum image size is {MaxImageUploadSize}MB");
        //    }
        //}
    }
}
