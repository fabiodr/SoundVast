using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public class ProcessAudioModel
    {
        public static string AudioContentType => "audio/mpeg";
        public static string CoverImageContentType => "image/jpg";

        public string AudioPath { get; set; }
        public string CoverImagePath { get; set; }
        public string MetadataPath { get; set; }
    }
}
