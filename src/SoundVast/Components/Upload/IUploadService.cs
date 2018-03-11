using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;
using Microsoft.AspNetCore.Http;
using SixLabors.Primitives;

namespace SoundVast.Components.Upload
{
    public interface IUploadService
    {
        Stream ResizeImage(Stream stream, Size size);
        Task<string> UploadRawImage(string fileName, Stream stream, string contentType);
        Task ResizeAndUploadImages(string fileNameWithoutExtension, Stream stream);
        Task<string> UploadCoverImage(string fileName, Stream stream, string contentType);
    }
}
