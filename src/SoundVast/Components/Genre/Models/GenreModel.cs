using SoundVast.Components.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Category.Models;
using SoundVast.Components.Image.Models;

namespace SoundVast.Components.Genre.Models
{
    public class GenreModel : ICategorizable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ImageFileModel ImageFile { get; }
        public virtual CategoryModel Category { get; set; }
        public virtual ICollection<AudioGenreModel> Audios { get; set; }

        public GenreModel()
        {

        }

        protected GenreModel(string name, ImageFileModel imageFile)
        {
            Name = name;
            ImageFile = imageFile;
        }
    }
}
