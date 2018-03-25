using SoundVast.Components.Genre.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SoundVast.Components.Genre
{
    public interface IGenreService
    {
        IEnumerable<Models.Genre> GetGenres();
        void UpdateCoverImages();
        void Add(Models.Genre model);
    }
}
