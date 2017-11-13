using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Storage.CloudStorage.AzureStorage
{
    public class AzureBlob : ICloudBlob
    {
        public CloudBlockBlob CloudBlockBlob { get; set; }

        public async Task UploadChunksFromPathAsync(string path, string contentType, long fileLength)
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
            } while (bytesToUpload > 0);

            CloudBlockBlob.Properties.ContentType = contentType;

            await CloudBlockBlob.PutBlockListAsync(blockIds);
        }

        public async Task UploadFromStreamAsync(Stream stream, string contentType)
        {
            CloudBlockBlob.Properties.ContentType = contentType;

            await CloudBlockBlob.UploadFromStreamAsync(stream);

            stream.Close();
        }

        public async Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length)
        {
            await CloudBlockBlob.DownloadRangeToStreamAsync(target, offset, length);
        }
    }
}
