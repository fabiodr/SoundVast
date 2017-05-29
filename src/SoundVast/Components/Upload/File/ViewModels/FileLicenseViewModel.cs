using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.File.ViewModels
{
    public class FileLicenseViewModel
    {
        public int Id { get; set; }

        [Display(Name = @"All Rights Reserved")]
        public bool AllRightsReserved { get; set; }

        [Display(Name = @"Creative Commons")]
        public bool CreativeCommons { get; set; }
    }
}
