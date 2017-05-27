using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.ServiceRuntime;
using System.Configuration;
using Microsoft.AspNetCore.Hosting;
using SoundVast.CloudStorage;

namespace SoundVast
{
    public enum Container
    {
        Audio,
        Image,
    }

    public interface IAzureConfig
    {
        IDictionary<Container, CloudBlobContainer> Containers { get; set; }
        TempResource AudioConverterResource { get; set; }
        TempResource ImageConverterResource { get; set; }
        // LocalResource AudioConverterResource { get; set; }
        // LocalResource ImageConverterResource { get; set; }
    }

    //Until web roles asp.net core is supported
    public class TempResource
    {
        public string RootPath { get; set; }
    }

    public class AzureConfig : IAzureConfig, ICloudStorage
    {
        public IDictionary<Container, CloudBlobContainer> Containers { get; set; }
        public TempResource AudioConverterResource { get; set; } = new TempResource();
        public TempResource ImageConverterResource { get; set; } = new TempResource();
        //    public LocalResource AudioConverterResource { get; set; }
        //   public LocalResource ImageConverterResource { get; set; }
        //   public LocalResource SoftwareResource { get; set; }

        public AzureConfig(string connectionString)
        {
            Initialize(connectionString);
        }

        private void Initialize(string connectionString)
        {
            var storageAccount = CloudStorageAccount.Parse(connectionString);
            var blobClient = storageAccount.CreateCloudBlobClient();

            Containers[Container.Audio] = blobClient.GetContainerReference("audio");
            Containers[Container.Image] = blobClient.GetContainerReference("images");

            foreach (var container in Containers.Values)
            {
                container.CreateIfNotExists();
                container.SetPermissions(new BlobContainerPermissions
                {
                    PublicAccess = BlobContainerPublicAccessType.Container
                });
            }

            //AudioConverterResource = RoleEnvironment.GetLocalResource("AudioConverterResource");
            //ImageConverterResource = RoleEnvironment.GetLocalResource("ImageConverterResource");

            //FFmpegExePath = SoftwareResource.RootPath + "ffmpeg.exe";

            AudioConverterResource.RootPath = "Temp/";
            ImageConverterResource.RootPath = "Temp/";
        }

        public void UploadFromPath(Container containerType, string path)
        {
            var blobContainer = Containers[containerType];
            var contentType = "application/octet-stream";

            if (containerType == Container.Audio)
                contentType = "audio/mpeg";
            else if (containerType == Container.Image)
                contentType = "image/jpeg";

            //Read the bytes from the converted file and upload them to blob storage
            var bytes = File.ReadAllBytes(path);
            var blob = blobContainer.GetBlockBlobReference(Path.GetFileName(path));

            blob.Properties.ContentType = contentType;
            blob.UploadFromByteArray(bytes, 0, bytes.Length);

            //Delete the local temp file
            File.Delete(path);
        }

        public CloudFileData GetFileProperties(Container containerType, string fileName)
        {
            var blob = Containers[containerType].GetBlockBlobReference(fileName);
            blob.FetchAttributes();

            return new CloudFileData
            {
                Size = blob.Properties.Length,
                Uri = blob.Uri.AbsoluteUri
            };
        }
    }
}