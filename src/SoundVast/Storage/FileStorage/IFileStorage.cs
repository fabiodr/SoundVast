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

        void TempStoreMp3File(IFormFile file, string destinationPath);
    }
}
