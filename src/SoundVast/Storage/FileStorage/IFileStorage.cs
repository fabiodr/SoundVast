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

        void ConvertToMp3(string fileName, string destPathToStoreAt, string mp3DestPathToStoreAt);
        void ReadMp3Bytes(IFormFile file);
        void ReadJpgBytes(IFormFile file, int newWidth, int newHeight);
    }
}
