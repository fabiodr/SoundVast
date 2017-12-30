using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Album
{
    public interface IAlbumService
    {
        IEnumerable<Models.Album> GetAlbums();
    }
}
