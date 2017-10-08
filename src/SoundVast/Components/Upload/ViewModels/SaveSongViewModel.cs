using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.ViewModels
{
    public class SaveSongViewModel
    {
        public string Name { get; set; }
        public string Artist { get; set; }
        public string AudioUrl { get; set; }
        public string CoverImageUrl { get; set; }
        public int? GenreId { get; set; }
    }
}
