using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.FileStream.ViewModels
{
    public class BuyLinkViewModel
    {
        public int Id { get; set; }

        [Display(Name = @"Buy Link(s)")]
        [DisplayFormat(ConvertEmptyStringToNull = true)]
        public string LinkUrl { get; set; }
    }
}
