using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Upload.ViewModels
{
    public class SaveUploadViewModel
    {
        [Required]
        public string Name { get; set; }

        public string Artist { get; set; }

        public IEnumerable<SelectListItem> Genres { get; set; }
    }
}
