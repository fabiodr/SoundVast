using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SoundVast.Models.UploadLiveStreamViewModels
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