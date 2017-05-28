using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudBlob
    {
        string FileName { get; set; }
        CloudStorageProperties FileProperties { get; }

        void UploadFromPath(string path, string contentType);
        Task DownloadRangeToStreamAsync(Stream target, long? offset, long? length);
    }
}
