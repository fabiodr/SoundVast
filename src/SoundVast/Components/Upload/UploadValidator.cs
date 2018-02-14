using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public class UploadValidator : IUploadValidator
    {
        private const int MaxImageUploadSize = 2;

        public void ValidateUploadCoverImage(double fileSize)
        {
            if (fileSize > MaxImageUploadSize)
            {
                throw new ValidationException(new ValidationResult("_error", $"Maximum image size is {MaxImageUploadSize}MB"));
            }
        }
    }
}
