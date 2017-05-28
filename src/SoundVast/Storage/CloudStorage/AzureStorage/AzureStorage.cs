using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.ServiceRuntime;
using System.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace SoundVast.Storage.CloudStorage.AzureStorage
{
    public class AzureStorage : ICloudStorage
    {
        public IDictionary<CloudStorageType, ICloudBlob> CloudBlobs { get; set; }

        public AzureStorage(IConfiguration configuration)
        {
            var storageAccount = CloudStorageAccount.Parse(configuration["ConnectionStrings:StorageConnectionString"]);
            var blobClient = storageAccount.CreateCloudBlobClient();

            CloudBlobs = new Dictionary<CloudStorageType, ICloudBlob>();

            foreach (CloudStorageType cloudStorageType in Enum.GetValues(typeof(CloudStorageType)))
            {
                CloudBlobs[cloudStorageType] = new AzureBlob(cloudStorageType.ToString().ToLower(), blobClient);
            }
        }

        public ICloudBlob GetBlob(CloudStorageType cloudStorageType, string fileName)
        {
            CloudBlobs[cloudStorageType].FileName = fileName;

            return CloudBlobs[cloudStorageType];
        }
    }
}