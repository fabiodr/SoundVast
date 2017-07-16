using SoundVast.Components.Genre.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Genre
{
    public interface IGenreService
    {
       // ICollection<GenreModel> GetGenresInCategory(string category);
        ICollection<GenreModel> GetGenres();
        GenreModel GetGenre(int id);
    }
}
