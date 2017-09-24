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
        private readonly IAudioService _audioService;
        private readonly ICloudStorage _cloudStorage;
        private readonly UserManager<ApplicationUser> _userManager;

        public SongController(IAudioService audioService, ICloudStorage cloudStorage, UserManager<ApplicationUser> userManager)
        {
            _audioService = audioService;
            _cloudStorage = cloudStorage;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetSongs(int current, int amount)
        {
            var songs = _audioService.GetSongs(current, amount);
            var hasMore = _audioService.GetSongs(current + amount, amount).Any();

            return Ok(new
            {
                songs,
                hasMore
            });
        }

        [HttpPost]
        [Authorize]
        public IActionResult RateSong([FromBody] RateSongModel model)
        {
            var userId = _userManager.GetUserId(User);
            var ratingId = _audioService.RateAudio(model.Id, model.Liked, userId);

            return Ok(new
            {
                ratingId
            });
        }

        [HttpGet]
        public Stream Stream(int id)
        {
            var song = _audioService.GetAudio(id);
            var blob = _cloudStorage.GetBlob(CloudStorageType.Audio, song.Name);

            Response.Headers.Add("Content-Disposition", $"attachment; filename={song.Name}");

            return new Stream(blob);
        }
    }
}