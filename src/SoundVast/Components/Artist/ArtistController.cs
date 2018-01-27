using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Artist
{
    public class ArtistController : Controller
    {
        private readonly IArtistService _artistService;

        public ArtistController(IArtistService artistService)
        {
            _artistService = artistService;
        }

        public IActionResult ArtistsForSelect(string input)
        {
            var artists = _artistService.GetAudios(null, input, null).Select(x => new
            {
                label = x.Name,
                value = x.Id,
                imageOptionUrl = x.CoverImageUrl
            });

            return Ok(new
            {
                artists
            });
        }
    }
}