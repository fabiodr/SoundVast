using System;
using System.IO;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;
using Microsoft.AspNetCore.Http;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.Primitives;
using System.Collections.Generic;

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

        public Stream ResizeImage(Stream stream, Size size)
        {
            stream.Position = 0;

            var image = Image.Load(stream);
            var resizeOptions = new ResizeOptions { Size = size };
            var resizedImage = image.Clone(x => x.Resize(resizeOptions).BackgroundColor(Rgba32.White));
            var newStream = new MemoryStream();

            resizedImage.SaveAsJpeg(newStream);

            newStream.Position = 0;

            return newStream;
        }
 
        public async Task<string> UploadCoverImage(string fileName, Stream stream, string contentType)
        {
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);
            var newFileName = $"{fileNameWithoutExtension}_{Guid.NewGuid().ToString()}";

            _uploadValidator.ValidateUploadCoverImage(ByteSize.FromBytes(stream.Length).MegaBytes);

            //TODO: Put raw image in archive storage
            var blobName = $"{newFileName}{Path.GetExtension(fileName)}";
            var blob = _cloudStorage.CloudBlobContainers[CloudStorageType.RawImage].GetBlockBlobReference(blobName);

            blob.Properties.ContentType = contentType;

            await blob.UploadFromStreamAsync(stream);

            foreach (var size in Audio.Image.CoverImageSizes)
            {
                using (var newStream = ResizeImage(stream, size.Value))
                {
                    var resizedBlobName = $"{newFileName}_{size.Key}.jpg";
                    var resizedBlob = _cloudStorage.CloudBlobContainers[CloudStorageType.Image].GetBlockBlobReference(resizedBlobName);

                    _uploadValidator.ValidateUploadCoverImage(ByteSize.FromBytes(newStream.Length).MegaBytes);

                    resizedBlob.Properties.ContentType = "image/jpeg";

                    await resizedBlob.UploadFromStreamAsync(newStream);
                }
            }

            return newFileName;
        }
    }
}
