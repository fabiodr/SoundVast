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
        
        public RadioController(IRadioService radioService)
        {
            _radioService = radioService;
        }

        [HttpGet]
        public IActionResult GetRadios(int current, int amount)
        {
            var radios = _radioService.GetAudios(current, amount);
            var hasMore = _radioService.GetAudios(current + amount, amount).Any();

            return Ok(new
            {
                radios,
                hasMore
            });
        }
    }
}