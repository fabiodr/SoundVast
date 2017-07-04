using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Storage.FileStorage
{
    public class FileMetadata
    {
        public static string CoverImageContentType => "image/jpg";

        public string CoverImagePath { get; set; }
        public byte[] CoverImageBytes { get; set; }
        public string Publisher { get; set; }
        public string Track { get; set; }
        public string Album { get; set; }
        public string Artist { get; set; }
        public string AlbumArtist { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string Composer { get; set; }
        public string Date { get; set; }
    }
}
