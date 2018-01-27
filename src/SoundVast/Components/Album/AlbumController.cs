using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Album
{
    public class AlbumController : Controller
    {
        private readonly IAlbumService _albumService;

        public AlbumController(IAlbumService albumService)
        {
            _albumService = albumService;
        }

        public IActionResult AlbumsForSelect(string input)
        {
            var albums = _albumService.GetAudios(null, input, null).Select(x => new
            {
                label = x.Name,
                value = x.Id,
                imageOptionUrl = x.CoverImageUrl
            });

            return Ok(new
            {
                albums
            });
        }
    }
}