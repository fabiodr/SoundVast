using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.AspNetCore.Http;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Upload
{
    public class Uploader : IUploader
    {
        private readonly ICloudStorage _cloudStorage;
  
        public Uploader(ICloudStorage cloudStorage)
        {
            _cloudStorage = cloudStorage;
        }

        public async Task<string> UploadImage(IFormFile file)
        {
            var imageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, file.FileName);

            await imageBlob.UploadFromStreamAsync(file.OpenReadStream(), file.ContentType);

            return imageBlob.CloudBlockBlob.Uri.AbsoluteUri;
        }
    }
}
