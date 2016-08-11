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

namespace SoundVast
{
    public interface IAzureConfig
    {
        CloudBlobContainer ContainerAudio { get; set; }
        CloudBlobContainer ContainerImage { get; set; }
        CloudBlobContainer ContainerSoftware { get; set; }
        TempResource AudioConverterResource { get; set; }
        TempResource ImageConverterResource { get; set; }
        TempResource SoftwareResource { get; set; }
        // LocalResource AudioConverterResource { get; set; }
        // LocalResource ImageConverterResource { get; set; }
        //  LocalResource SoftwareResource { get; set; }
        string FFmpegExePath { get; set; }
    }

    //Until web roles asp.net core is supported
    public class TempResource
    {
        public string RootPath { get; set; }
    }

    public class AzureConfig : IAzureConfig
    {
        public CloudBlobContainer ContainerAudio { get; set; }
        public CloudBlobContainer ContainerImage { get; set; }
        public CloudBlobContainer ContainerSoftware { get; set; }
        public TempResource AudioConverterResource { get; set; } = new TempResource();
        public TempResource ImageConverterResource { get; set; } = new TempResource();
        public TempResource SoftwareResource { get; set; } = new TempResource();
        //    public LocalResource AudioConverterResource { get; set; }
        //   public LocalResource ImageConverterResource { get; set; }
        //   public LocalResource SoftwareResource { get; set; }
        public string FFmpegExePath { get; set; }

        public AzureConfig(string connectionString)
        {
            Initialize(connectionString);
        }

        private void Initialize(string connectionString)
        {
            var storageAccount = CloudStorageAccount.Parse(connectionString);
            var blobClient = storageAccount.CreateCloudBlobClient();

            ContainerAudio = blobClient.GetContainerReference("audio");
            ContainerImage = blobClient.GetContainerReference("images");
            ContainerSoftware = blobClient.GetContainerReference("software");

            ContainerAudio.CreateIfNotExists();
            ContainerImage.CreateIfNotExists();
            ContainerSoftware.CreateIfNotExists();

            ContainerImage.SetPermissions(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Container });
            ContainerAudio.SetPermissions(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Container });

            //SoftwareResource = RoleEnvironment.GetLocalResource("SoftwareResource");
            //AudioConverterResource = RoleEnvironment.GetLocalResource("AudioConverterResource");
            //ImageConverterResource = RoleEnvironment.GetLocalResource("ImageConverterResource");

            //FFmpegExePath = SoftwareResource.RootPath + "ffmpeg.exe";

            FFmpegExePath = "ffmpeg.exe";
            SoftwareResource.RootPath = "App_Data/";
            AudioConverterResource.RootPath = "App_Data/";
            ImageConverterResource.RootPath = "App_Data/";

            ContainerSoftware.GetBlockBlobReference("ffmpeg.exe").DownloadToFile("ffmpeg.exe", FileMode.Create);
        }
    }
}