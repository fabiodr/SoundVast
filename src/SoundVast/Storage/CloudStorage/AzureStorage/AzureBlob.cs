using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

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

        public AzureBlob(string containerName, CloudBlobClient cloudBlobClient)
        {
            CloudBlobContainer = cloudBlobClient.GetContainerReference(containerName);
            CloudBlobContainer.CreateIfNotExists();
            CloudBlobContainer.SetPermissions(new BlobContainerPermissions
            {
                PublicAccess = BlobContainerPublicAccessType.Container
            });
        }

        public async Task UploadFromPathAsync(string path, string contentType = "application/octet-stream")
        {
            //Read the bytes from the converted file and upload them to blob storage
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
