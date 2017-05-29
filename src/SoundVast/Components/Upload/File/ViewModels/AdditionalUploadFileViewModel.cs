using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.File.ViewModels
{
    public class AdditionalUploadFileViewModel
    {
        public string Lyrics { get; set; }
        public string Album { get; set; }

        [Display(Name = @"Release Date")]
        [DisplayFormat(ConvertEmptyStringToNull = true, DataFormatString = "{0:dd'/'MMMM'/'yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? ReleaseDate { get; set; }
    }
}
