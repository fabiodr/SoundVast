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
            var newStream = new MemoryStream();

            using (var image = Image.Load(stream))
            {
                var resizeOptions = new ResizeOptions { Size = size, Mode = ResizeMode.Stretch };

                image.Mutate(x => x.Resize(resizeOptions).BackgroundColor(Rgba32.White));
                image.SaveAsJpeg(newStream, new SixLabors.ImageSharp.Formats.Jpeg.JpegEncoder { Quality = 90 });
            }

            newStream.Position = 0;

            return newStream;
        }

        public async Task<string> UploadRawImage(string path, MemoryStream memoryStream, string contentType)
        {
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(path);
            var newFileName = $"{fileNameWithoutExtension}_{Guid.NewGuid().ToString()}";

            _uploadValidator.ValidateUploadCoverImage(ByteSize.FromBytes(memoryStream.Length).MegaBytes);

            //TODO: Put raw image in archive storage
            var blobName = $"{newFileName}{Path.GetExtension(path)}";
            var blob = _cloudStorage.CloudBlobContainers[CloudStorageType.RawImage].GetBlockBlobReference(blobName);

            blob.Properties.ContentType = contentType;

            await blob.UploadFromStreamAsync(memoryStream);

            memoryStream.Position = 0;

            return newFileName;
        }

        public async Task<string> ResizeAndUploadImages(string path, Stream stream)
        {
            var fileName = Path.GetFileNameWithoutExtension(path);

            foreach (var size in Audio.Image.CoverImageSizes)
            {
                using (var newStream = ResizeImage(stream, size.Value))
                {
                    var resizedBlobName = $"{fileName}_{size.Key}.jpg";
                    var resizedBlob = _cloudStorage.CloudBlobContainers[CloudStorageType.Image].GetBlockBlobReference(resizedBlobName);

                    _uploadValidator.ValidateUploadCoverImage(ByteSize.FromBytes(newStream.Length).MegaBytes);

                    resizedBlob.Properties.ContentType = "image/jpeg";

                    await resizedBlob.UploadFromStreamAsync(newStream);
                }
            }

            return fileName;
        }

        public async Task<string> UploadCoverImage(string path, MemoryStream memoryStream, string contentType)
        {
            var newFileName = await UploadRawImage(path, memoryStream, contentType);

            return await ResizeAndUploadImages(newFileName, memoryStream);
        }
    }
}
