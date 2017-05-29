using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Upload.File.ViewModels
{
    public class RequiredUploadFileViewModel
    {
        public int Id { get; set; }
        public TimeSpan? Duration { get; set; }
        public string Image { get; set; }
        public SelectCategoryViewModel SelectCategoryViewModel { get; set; }

        [Required]
        public string Artist { get; set; }

        [Required]
        [StringLength(160)]
        public string Name { get; set; }

        [Display(Name = @"Bit Rate")]
        public int? BitRate { get; set; }

        [HiddenInput(DisplayValue = false)]
        public string TempAudioName { get; set; }
    }
}
