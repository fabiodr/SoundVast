using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Genre
{
    public class GenreController : Controller
    {
        private readonly IGenreService _genreService;

        public GenreController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public IActionResult GetMusicGenres()
        {
            var musicGenres = _genreService.GetMusicGenres();

            return Ok(new {
                musicGenres
            });
        }

        [HttpGet]
        public IActionResult GetLiveStreamGenres()
        {
            var liveStreamGenres = _genreService.GetLiveStreamGenres();

            return Ok(new
            {
                liveStreamGenres
            });
        }
    }
}