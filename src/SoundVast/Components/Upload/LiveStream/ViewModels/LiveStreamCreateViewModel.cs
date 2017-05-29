using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SoundVast.Components.Upload.LiveStream.ViewModels
{
    public class LiveStreamCreateViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string WebsiteUrl { get; set; }
        public string AudioUrl { get; set; }
        public MultiSelectList GenresSelectList { get; set; }

        [HiddenInput(DisplayValue = false)]
        public string Image { get; set; }

        [Required]
        [Display(Name = @"Genre Tags")]
        [HiddenInput(DisplayValue = false)]
        public int[] SelectedGenreIds { get; set; }
    }
}
