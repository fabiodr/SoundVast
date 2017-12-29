using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace SoundVast.Components.Genre.Models
{
    public abstract class Genre
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string CoverImageUrl { get; set; }
        public virtual ICollection<Audio.Models.Audio> Audios { get; set; }
    }
}
