using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.WindowsAzure.Storage.Blob;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudBlob
    {
        CloudStorageProperties FileProperties { get; }
        CloudBlockBlob CloudBlockBlob { get; set; }

        Task UploadFromPathAsync(string path, string contentType);
        Task UploadChunksFromPathAsync(string path, string contentType, long fileLength, string progressId);
        Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length);
    }
}
