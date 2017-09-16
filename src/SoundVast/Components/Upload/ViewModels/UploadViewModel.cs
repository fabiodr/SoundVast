using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.ViewModels
{
    public class SaveUploadViewModel
    {
        public string Name { get; set; }
        public string Artist { get; set; }
        public string AudioUrl { get; set; }
        public string CoverImageUrl { get; set; }
        public int? GenreId { get; set; }
    }

    public class UploadViewModel
    {
        public string AudioName { get; set; }
        public string AudioPath { get; set; }
        public long FileLength { get; set; }
        public string ProgressId { get; set; }
    }
}
