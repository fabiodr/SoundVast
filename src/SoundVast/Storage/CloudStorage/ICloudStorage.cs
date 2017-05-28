using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudStorage
    {
        IDictionary<CloudStorageType, ICloudBlob> CloudBlobs { get; set; }
        ICloudBlob GetBlob(CloudStorageType cloudStorageType, string fileName);
    }
}
