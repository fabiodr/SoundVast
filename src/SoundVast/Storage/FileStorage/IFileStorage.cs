using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public interface IFileStorage
    {
        byte[] ImageBytes { get; set; }
        byte[] AudioBytes { get; set; }

        Task<ProcessAudio> TempStoreMp3Data(IFormFile file);
        Task<AudioFileMetadata> GetAudioFileMetadata(IFormFile file);
    }
}
