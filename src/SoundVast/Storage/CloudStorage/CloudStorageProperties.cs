using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.CloudStorage
{
    public class CloudStorageProperties
    {
        public long Size { get; set; }
        public Uri Uri { get; set; }
        public string ETag { get; set; }
        public string ContentType { get; set; }
    }
}
