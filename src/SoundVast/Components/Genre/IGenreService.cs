using SoundVast.Components.Genre.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Genre
{
    public interface IGenreService
    {
       // ICollection<Genre> GetGenresInCategory(string category);
        ICollection<Models.Genre> GetGenres();
    }
}
