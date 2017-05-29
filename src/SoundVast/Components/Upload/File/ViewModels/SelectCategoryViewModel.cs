using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SoundVast.Components.Upload.File.ViewModels
{
    public class SelectCategoryViewModel
    {
        public string NewCategory { get; set; }

        [Required]
        public int SelectedCategory { get; set; }

        [Display(Name = @"Category")]
        public SelectList CategorySelectList { get; set; }
    }
}
