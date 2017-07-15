using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace SoundVast.Storage.CloudStorage
{
    public interface ICloudStorage
    {
        ICloudBlob GetBlob(CloudStorageType cloudStorageType, string fileName);
    }
}
