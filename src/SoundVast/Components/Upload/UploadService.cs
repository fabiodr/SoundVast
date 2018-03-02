using System;
using System.IO;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;
using Microsoft.AspNetCore.Http;
using ImageResizer;
using System.Drawing;
using System.Drawing.Imaging;

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

        public Stream ResizeImage(IFormFile file, int maxWidth)
        {
            var settings = new ResizeSettings
            {
                MaxWidth = maxWidth,
                Format = "jpg"
            };

            var stream = new MemoryStream();

            ImageBuilder.Current.Build(file, stream, settings);

            return stream;
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
