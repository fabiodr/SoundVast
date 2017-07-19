using System.Collections.Generic;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public interface IUploadValidator
    {
        void ValidateUploadCoverImage(double fileSize);
    }
}