using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Artist
{
    public interface IArtistService
    {
        IEnumerable<Models.Artist> GetArtists();
    }
}
