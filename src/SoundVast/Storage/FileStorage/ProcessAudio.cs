using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public class ProcessAudio
    {
        public static string AudioContentType => "audio/mpeg";
        public string AudioPath { get; set; }
        public string AudioName { get; set; }
    }
}
