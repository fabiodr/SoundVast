using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using System.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage.Blob;

namespace SoundVast.Storage.CloudStorage.AzureStorage
{
    public class AzureStorage
    {
        public IDictionary<CloudStorageType, CloudBlobContainer> CloudBlobContainers { get; set; } = new Dictionary<CloudStorageType, CloudBlobContainer>();

        public AzureStorage(IConfiguration configuration)
        {
            var storageAccount = CloudStorageAccount.Parse(configuration["ConnectionStrings:StorageConnectionString"]);
            var blobClient = storageAccount.CreateCloudBlobClient();

            foreach (CloudStorageType cloudStorageType in Enum.GetValues(typeof(CloudStorageType)))
            {
                var cloudBlobContainer = blobClient.GetContainerReference(cloudStorageType.ToString().ToLower());
                cloudBlobContainer.CreateIfNotExistsAsync().Wait();
                cloudBlobContainer.SetPermissionsAsync(new BlobContainerPermissions
                {
                    PublicAccess = BlobContainerPublicAccessType.Container
                }).Wait();

                CloudBlobContainers.Add(cloudStorageType, cloudBlobContainer);
            }
        }

        public CloudBlockBlob GetBlob(CloudStorageType cloudStorageType, string fileName)
        {
            var blob = CloudBlobContainers[cloudStorageType].GetBlockBlobReference(fileName);

            return blob;
        }
    }
}