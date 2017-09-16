using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Song.Models;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;

namespace SoundVast.Components.Song
{
    public class SongController : Controller
    {
        private readonly IAudioService _audioService;
        private readonly ICloudStorage _cloudStorage;

        public SongController(IAudioService audioService, ICloudStorage cloudStorage)
        {
            _audioService = audioService;
            _cloudStorage = cloudStorage;
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

        [HttpGet]
        public Stream Stream(int id)
        {
            var song = _audioService.GetSong(id);
            var blob = _cloudStorage.GetBlob(CloudStorageType.Audio, song.Name);

            Response.Headers.Add("Content-Disposition", $"attachment; filename={song.Name}");

            return new Stream(blob);
        }
    }
}