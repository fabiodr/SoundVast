using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Artist
{
    public class YearsActive
    {
        [Required]
        public int Id { get; set; }
        public DateTimeOffset StartYear { get; set; }
        public DateTimeOffset EndYear { get; set; }
        public virtual Models.Artist Artist { get; set; }
    }
}
