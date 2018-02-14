using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Upload
{
    public class UploadService : IUploadService
    {
        private readonly IUploadValidator _uploadValidator;

        public UploadService(IUploadValidator uploadValidator)
        {
            _uploadValidator = uploadValidator;
        }

        public async Task UploadCoverImage(ICloudBlob blob, Stream stream, string contentType)
        {
            var fileSize = ByteSize.FromBytes(stream.Length);

            _uploadValidator.ValidateUploadCoverImage(fileSize.MegaBytes);

            blob.Properties.ContentType = contentType;

            await blob.UploadFromStreamAsync(stream);

            stream.Close();
        }
    }
}
