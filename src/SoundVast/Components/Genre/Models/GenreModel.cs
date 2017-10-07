using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace SoundVast.Components.Genre.Models
{
    public class GenreModel
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        //public virtual ImageFileModel ImageFile { get; }
        //public virtual CategoryModel Category { get; set; }
        //public virtual ICollection<AudioGenreModel> Audios { get; set; }

        //protected GenreModel(string name, ImageFileModel imageFile)
        //{
        //    Name = name;
        //    ImageFile = imageFile;
        //}
    }
}
