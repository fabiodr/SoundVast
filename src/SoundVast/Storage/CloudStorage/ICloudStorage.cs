using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.WindowsAzure.Storage.Blob;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudStorage
    {
        CloudBlockBlob GetBlob(CloudStorageType cloudStorageType, string fileName);
    }
}
