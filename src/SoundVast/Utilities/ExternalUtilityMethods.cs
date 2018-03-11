using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.Upload;
using SoundVast.Storage.CloudStorage;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Utilities
{
    public class ExternalUtilityMethods
    {
        private readonly ICloudStorage _cloudStorage;
        private readonly IUploadService _uploadService;

        public ExternalUtilityMethods(ICloudStorage cloudStorage, IUploadService uploadService)
        {
            _cloudStorage = cloudStorage;
            _uploadService = uploadService;
        }

        public async Task ConvertAllRawImagesToImages()
        {
            var segmentedBlobs = await _cloudStorage.CloudBlobContainers[CloudStorageType.RawImage].ListBlobsSegmentedAsync(null);

            foreach (var blob in segmentedBlobs.Results.OfType<CloudBlockBlob>())
            {
                using (var stream = new MemoryStream())
                {
                    await blob.DownloadToStreamAsync(stream);

                    stream.Position = 0;

                    await _uploadService.ResizeAndUploadImages(blob.Name, stream);
                }
            }
        }
    }
}
