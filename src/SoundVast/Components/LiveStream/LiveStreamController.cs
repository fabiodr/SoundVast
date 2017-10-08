using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using SoundVast.Components.LiveStream;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamController : Controller
    {
        private readonly ILiveStreamService _liveStreamService;
        
        public LiveStreamController(ILiveStreamService liveStreamService)
        {
            _liveStreamService = liveStreamService;
        }

        [HttpGet]
        public IActionResult GetRadios(int current, int amount)
        {
            var radios = _liveStreamService.GetAudios(current, amount);
            var hasMore = _liveStreamService.GetAudios(current + amount, amount).Any();

            return Ok(new
            {
                radios,
                hasMore
            });
        }
    }
}