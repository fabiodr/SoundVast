using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Dirble
{
    public interface IDirble
    {
        Task<StationDirbleDto> GetStation(int id, TimeSpan cacheTime);
        Task<StationDirbleDto> GetStation(int id);
        Task<IEnumerable<StationDirbleDto>> GetStations(int page, int perPage = 30, int offset = 0);
        Task<IEnumerable<GenreDirbleDto>> GetCategoriesInTreeView();
        Task<IEnumerable<StationDirbleDto>> GetPopularStations(int page, TimeSpan cacheTime, int perPage = 30, int offset = 0);
    }
}
