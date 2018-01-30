using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Audio.Models
{
    public class AudioTag
    {
        [Required]
        public int Id { get; set; }
        public int AudioId { get; set; }
        public virtual Audio Audio { get; set; }
        public int TagId { get; set; }
        public virtual Tag.Tag Tag { get; set; }
    }
}
