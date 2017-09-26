using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;

namespace SoundVast.Components.Song
{
    public class SongController : Controller
    {
        private readonly ISongService _songService;
        private readonly ICloudStorage _cloudStorage;

        public SongController(ISongService songService, ICloudStorage cloudStorage)
        {
            _songService = songService;
            _cloudStorage = cloudStorage;
        }

        [HttpGet]
        public IActionResult GetSongs(int current, int amount)
        {
            var songs = _songService.GetAudios(current, amount);
            var hasMore = _songService.GetAudios(current + amount, amount).Any();

            return Ok(new
            {
                songs,
                hasMore
            });
        }

        [HttpGet]
        public Stream Stream(int id)
        {
            var song = _songService.GetAudio(id);
            var blob = _cloudStorage.GetBlob(CloudStorageType.Audio, song.Name);

            Response.Headers.Add("Content-Disposition", $"attachment; filename={song.Name}");

            return new Stream(blob);
        }
    }
}