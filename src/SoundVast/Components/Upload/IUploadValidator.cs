using System.Collections.Generic;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public interface IUploadValidator
    {
        IEnumerable<ValidationResult> ValidateUploadCoverImage(double fileSizeInMegabytes);
    }
}