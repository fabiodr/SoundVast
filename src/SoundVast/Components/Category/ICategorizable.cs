using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Category.Models;

namespace SoundVast.Components.Category
{
    public interface ICategorizable
    {
        CategoryModel Category { get; set; }
    }
}
