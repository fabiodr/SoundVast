using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Music
{
    public class MusicController : Controller
    {
        private readonly IMusicService _musicService;

        public MusicController(IMusicService musicService)
        {
            _musicService = musicService;
        }

        public IActionResult GetMusic()
        {
            var musicAudios = _musicService.GetMusic();

            return Ok(new
            {
                musicAudios
            });
        }
    }
}