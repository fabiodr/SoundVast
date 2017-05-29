using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Category.Models;
using SoundVast.Components.Image.Models;

namespace SoundVast.Components.LiveStream.Models
{
    public class LiveStreamCategoryModel : CategoryModel
    {
        public LiveStreamCategoryModel()
        {
        }

        public LiveStreamCategoryModel(string name, ImageFileModel imageFile) : base(name, imageFile)
        {
        }
    }
}
