using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SoundVast.Models;

namespace SoundVast.Models.UploadFileViewModels
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

    public class AdditionalUploadFileViewModel
    {
        public string Lyrics { get; set; }
        public string Album { get; set; }

        [Display(Name = @"Release Date")]
        [DisplayFormat(ConvertEmptyStringToNull = true, DataFormatString = "{0:dd'/'MMMM'/'yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? ReleaseDate { get; set; }
    }

    public class SelectCategoryViewModel
    {
        public string NewCategory { get; set; }

        [Required]
        public int SelectedCategory { get; set; }

        [Display(Name = @"Category")]
        public SelectList CategorySelectList { get; set; }
    }

    public class FileLicenseViewModel
    {
        public int Id { get; set; }

        [Display(Name = @"All Rights Reserved")]
        public bool AllRightsReserved { get; set; }

        [Display(Name = @"Creative Commons")]
        public bool CreativeCommons { get; set; }
    }
}