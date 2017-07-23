using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Music.ViewModels;

namespace SoundVast.Components.Music
{
    public class MusicController : Controller
    {
        private readonly IMusicService _musicService;

        public MusicController(IMusicService musicService)
        {
            _musicService = musicService;
        }

        [HttpPost]
        public IActionResult FetchMusic([FromBody] GetMusicViewModel model)
        {
            var musicAudios = _musicService.GetMusic(model.Current, model.Amount);
            var hasMore = _musicService.GetMusic(model.Current + model.Amount, model.Amount).Any();

            return Ok(new
            {
                musicAudios,
                hasMore
            });
        }
    }
}