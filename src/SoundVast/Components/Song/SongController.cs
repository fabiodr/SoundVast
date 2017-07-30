using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public class SongController : Controller
    {
        private readonly IAudioService _audioService;

        public SongController(IAudioService audioService)
        {
            _audioService = audioService;
        }

        [HttpPost]
        public IActionResult FetchSongs([FromBody] FetchSongsModel model)
        {
            var songs = _audioService.GetSongs(model.Current, model.Amount);
            var hasMore = _audioService.GetSongs(model.Current + model.Amount, model.Amount).Any();

            return Ok(new
            {
                songs,
                hasMore
            });
        }

        [HttpPost]
        public IActionResult FetchSong([FromBody] FetchSongModel model)
        {
            var song = _audioService.GetSong(model.Id);

            return Ok(new
            {
                song
            });
        }
    }
}