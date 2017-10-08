using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.ViewModels
{
    public class UploadSongViewModel
    {
        public string AudioName { get; set; }
        public string AudioPath { get; set; }
        public long FileLength { get; set; }
        public string ProgressId { get; set; }
    }
}
