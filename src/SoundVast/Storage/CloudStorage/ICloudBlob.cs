using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage.Blob;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudBlob
    {
        CloudBlockBlob CloudBlockBlob { get; set; }

        Task UploadFromStreamAsync(Stream stream, string contentType);
        Task UploadChunksFromPathAsync(string path, string contentType, long fileLength);
        Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length);
    }
}
