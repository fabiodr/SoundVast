using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Components.Upload
{
    public interface IUploadService
    {
        Task<CloudBlockBlob> UploadCoverImage(IFormFile file);
    }
}
