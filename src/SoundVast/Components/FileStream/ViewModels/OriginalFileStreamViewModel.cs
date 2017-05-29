using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;

namespace SoundVast.Components.FileStream.ViewModels
{
    public class OriginalFileStreamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public string Lyrics { get; set; }
        public string ImagePath { get; set; }

        [Display(Name = @"Release Date")]
        [DisplayFormat(ConvertEmptyStringToNull = true, DataFormatString = "{0:dd'/'MMMM'/'yyyy}")]
        public DateTime? ReleaseDate { get; set; }

        [Display(Name = @"Buy Link(s)")]
        public ICollection<BuyLinkViewModel> BuyLinkViewModels { get; set; }

        [Display(Name = @"Genres")]
        public ICollection<GenreViewModel> GenreViewModels { get; set; }
    }
}
