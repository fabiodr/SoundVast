using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using SoundVast.Components.Audio.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace SoundVast.Components.Genre.Models
{
    public static class GenreName
    {
        public static string Music => "Music";
        public static string Other => "Other";
    }

    public class Genre
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public string CoverImageName { get; set; }
        public virtual ICollection<AudioGenre> AudioGenres { get; set; }
    }
}
