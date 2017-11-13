//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using SoundVast.Components.Audio.Models;
//using SoundVast.Components.Genre.Models;
//using SoundVast.Components.Image.Models;

//namespace SoundVast.Components.Category.Models
//{
//    public class CategoryModel
//    {
//        public int Id { get; set; }
//        public string Name { get; set; }
//        public virtual ImageFileModel ImageFile { get; }
//        public virtual ICollection<Song> Audios { get; set; }
//        public virtual ICollection<Genre> Genres { get; set; }

//        public CategoryModel()
//        {

//        }

//        protected CategoryModel(string name, ImageFileModel imageFile)
//        {
//            Name = name;
//            ImageFile = imageFile;
//        }
//    }
//}
