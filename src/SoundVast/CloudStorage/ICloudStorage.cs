using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.CloudStorage
{
    public interface ICloudStorage
    {
        void UploadFromPath(Container containerType, string path);
        CloudFileData GetFileProperties(Container containerType, string fileName);
    }
}
