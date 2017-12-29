using SoundVast.Components.Genre.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SoundVast.Components.Genre
{
    public interface IGenreService<T> where T : Models.Genre
    {
        IEnumerable<T> GetGenres();
        void UpdateCoverImages();
    }
}
