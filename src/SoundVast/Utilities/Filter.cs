using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SoundVast.Utilities
{
    public enum DateFrom
    {
        Today = 1,
        Weekly = 7,
        Monthly = 30,
        [Display(Name = @"All Time")]
        AllTime
    }
}