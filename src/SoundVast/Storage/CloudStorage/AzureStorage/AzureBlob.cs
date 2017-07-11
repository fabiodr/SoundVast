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
        private string _fileName;
        public string FileName
        {
            get => _fileName;
            set
            {
                _fileName = value;
                _cloudBlockBlob = CloudBlobContainer.GetBlockBlobReference(value);
            }
        }
        public CloudStorageProperties FileProperties => new CloudStorageProperties
        {
            Size = _cloudBlockBlob.Properties.Length,
            Uri = _cloudBlockBlob.Uri,
            ETag = _cloudBlockBlob.Properties.ETag,
            ContentType = _cloudBlockBlob.Properties.ContentType,
        };
        public CloudBlobContainer CloudBlobContainer { get; set; }
        private CloudBlockBlob _cloudBlockBlob;
        public static IDictionary<string, int> UploadProgresses = new Dictionary<string, int>();

        public AzureBlob(string containerName, CloudBlobClient cloudBlobClient)
        {
            CloudBlobContainer = cloudBlobClient.GetContainerReference(containerName);
            CloudBlobContainer.CreateIfNotExists();
            CloudBlobContainer.SetPermissions(new BlobContainerPermissions
            {
                PublicAccess = BlobContainerPublicAccessType.Container
            });
        }

        public async Task UploadChunksFromPathAsync(string path, long fileLength, string progressId)
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
                await _cloudBlockBlob.PutBlockAsync(blockId, new MemoryStream(blobContents), null);

                bytesUploaded += bytesToRead;
                bytesToUpload -= bytesToRead;
                startPosition += bytesToRead;
                index++;

                var percent = (int)(((double)bytesUploaded / (double)fileLength) * 100);
                UploadProgresses[progressId] = percent;
            } while (bytesToUpload > 0);

            await _cloudBlockBlob.PutBlockListAsync(blockIds);
        }

        public async Task UploadFromPathAsync(string path, string contentType = "application/octet-stream")
        {
            var bytes = File.ReadAllBytes(path);

            File.Delete(path);
            
            _cloudBlockBlob.Properties.ContentType = contentType;

            await _cloudBlockBlob.UploadFromByteArrayAsync(bytes, 0, bytes.Length);
        }

        public async Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length)
        {
            await _cloudBlockBlob.DownloadRangeToStreamAsync(target, offset, length);
        }
    }
}
