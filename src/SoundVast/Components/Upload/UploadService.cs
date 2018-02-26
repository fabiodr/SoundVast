using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;
using Microsoft.WindowsAzure.Storage;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Components.Upload
{
    public class UploadService : IUploadService
    {
        private readonly ICloudStorage _cloudStorage;
        private readonly IUploadValidator _uploadValidator;

        public UploadService(ICloudStorage cloudStorage, IUploadValidator uploadValidator)
        {
            _uploadValidator = uploadValidator;
            _cloudStorage = cloudStorage;
        }

        public async Task<CloudBlockBlob> UploadCoverImage(IFormFile file)
        {
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(file.FileName);
            var extension = Path.GetExtension(file.FileName);
            var blobName = $"{fileNameWithoutExtension}_{Guid.NewGuid().ToString()}{extension}";
            var blob = _cloudStorage.CloudBlobContainers[CloudStorageType.Image].GetBlockBlobReference(blobName);

            using (var stream = file.OpenReadStream())
            {
                var fileSize = ByteSize.FromBytes(stream.Length);

                _uploadValidator.ValidateUploadCoverImage(fileSize.MegaBytes);

                blob.Properties.ContentType = file.ContentType;

                await blob.UploadFromStreamAsync(stream);
            }

            return blob;
        }
    }
}
