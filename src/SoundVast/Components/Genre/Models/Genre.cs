using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Genre.Models
{
    public class Genre
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string CoverImageName { get; set; }
        public virtual ICollection<AudioGenre> AudioGenres { get; set; }
    }
}
