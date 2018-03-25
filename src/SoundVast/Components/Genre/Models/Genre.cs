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
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Position { get; set; }
        public string Urlid { get; set; }
        [Required]
        public string Slug { get; set; }
        public string CoverImageName { get; set; }
        [Required]
        public DateTimeOffset DateAdded { get; set; }
        [Required]
        public DateTimeOffset DateUpdated { get; set; }
        public virtual ICollection<Genre> ChildGenres { get; set; } = new List<Genre>();
        public virtual ICollection<AudioGenre> AudioGenres { get; set; } = new List<AudioGenre>();
    }
}
