using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public interface IFileStorage
    {
        Task<ProcessAudio> TempStoreMp3Data(IFormFile file);
        Task<AudioFileMetadata> GetAudioFileMetadata(IFormFile file);
    }
}
