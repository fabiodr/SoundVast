using System.Collections.Generic;
using SoundVast.Validation;

namespace SoundVast.Components.Audio
{
    public interface IAudioValidator
    {
        void ValidateUploadCoverImage(double fileSize);
    }
}