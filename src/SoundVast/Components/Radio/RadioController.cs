using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Audio;
using SoundVast.Components.Radio.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Radio
{
    public class RadioController : Controller
    {
        private readonly IRadioService _radioService;
        private readonly UserManager<ApplicationUser> _userManager;
        
        public RadioController(IRadioService radioService, ICloudStorage cloudStorage, UserManager<ApplicationUser> userManager)
        {
            _radioService = radioService;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetRadios(int current, int amount)
        {
            var songs = _radioService.GetAudios(current, amount);
            var hasMore = _radioService.GetAudios(current + amount, amount).Any();

            return Ok(new
            {
                songs,
                hasMore
            });
        }

        [HttpPost]
        [Authorize]
        public IActionResult RateRadio([FromBody] RateRadioModel model)
        {
            var userId = _userManager.GetUserId(User);
            var ratingId = _radioService.RateAudio(model.Id, model.Liked, userId);

            return Ok(new
            {
                ratingId
            });
        }
    }
}