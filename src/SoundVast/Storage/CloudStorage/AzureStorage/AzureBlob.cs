using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading;
using System.Text;

namespace SoundVast.Storage.CloudStorage.AzureStorage
{
    public class AzureBlob : ICloudBlob
    {
        public CloudStorageProperties FileProperties => new CloudStorageProperties
        {
            Size = CloudBlockBlob.Properties.Length,
            Uri = CloudBlockBlob.Uri,
            ETag = CloudBlockBlob.Properties.ETag,
            ContentType = CloudBlockBlob.Properties.ContentType,
        };
        public CloudBlockBlob CloudBlockBlob { get; set; }
        private static readonly IDictionary<string, int> UploadProgresses = new Dictionary<string, int>();

        public static int GetProgressPercent(string progressId)
        {
            UploadProgresses.TryGetValue(progressId, out int progressPercent);

            if (progressPercent == 100)
            {
                UploadProgresses.Remove(progressId);
            }

            return progressPercent;
        }

        public async Task UploadChunksFromPathAsync(string path, string contentType, long fileLength, string progressId)
        {
            const int blockSize = 256 * 1024;
            var bytesToUpload = fileLength;
            long bytesUploaded = 0;
            long startPosition = 0;

            var blockIds = new List<string>();
            var index = 0;

            do
            {
                var bytesToRead = Math.Min(blockSize, bytesToUpload);
                var blobContents = new byte[bytesToRead];

                using (var fs = new FileStream(path, FileMode.Open))
                {
                    fs.Position = startPosition;
                    fs.Read(blobContents, 0, (int) bytesToRead);
                }

                var blockId = Convert.ToBase64String(Encoding.UTF8.GetBytes(index.ToString("d6")));

                blockIds.Add(blockId);
                await CloudBlockBlob.PutBlockAsync(blockId, new MemoryStream(blobContents), null);

                bytesUploaded += bytesToRead;
                bytesToUpload -= bytesToRead;
                startPosition += bytesToRead;
                index++;

                var percent = (int)(((double)bytesUploaded / (double)fileLength) * 100);
                UploadProgresses[progressId] = percent;
            } while (bytesToUpload > 0);

            CloudBlockBlob.Properties.ContentType = contentType;

            await CloudBlockBlob.PutBlockListAsync(blockIds);
        }

        public async Task UploadFromPathAsync(string path, string contentType)
        {
            var bytes = File.ReadAllBytes(path);

            File.Delete(path);

            CloudBlockBlob.Properties.ContentType = contentType;

            await CloudBlockBlob.UploadFromByteArrayAsync(bytes, 0, bytes.Length);
        }

        public async Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length)
        {
            await CloudBlockBlob.DownloadRangeToStreamAsync(target, offset, length);
        }
    }
}
