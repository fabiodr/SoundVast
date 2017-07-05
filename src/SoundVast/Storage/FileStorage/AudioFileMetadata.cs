using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public class AudioFileMetadata
    {
        public static string CoverImageContentType => "image/jpg";

        public string CoverImageUri { get; set; }
        public string CoverImageName { get; set; }
        public string CoverImagePath { get; set; }
        public IDictionary<string, string> Metadata { get; set; }
        
    }
}
