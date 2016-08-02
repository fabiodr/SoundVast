using AutoMapper;
using SoundVast.Controllers;
using SoundVast.Repository;
using SoundVast.ServiceLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using SoundVast.CustomHelpers;
using SoundVast.Data;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.SearchViewModels;

namespace SoundVast.Controllers
{
    public class SearchController : CustomBaseController
    {
        private readonly IAudioService<Audio> _audioService;

        public SearchController(IAudioService<Audio> audioService)
        {
            _audioService = audioService;
        }

        [HttpPost]
        //[OutputCache(CacheProfile = "SearchTags")]
        public JsonResult SetSearchTags()
        {
            var audios = _audioService.GetAudios();

            //var tags = audios.Select(x => new { label = x.Name, genre = _audioService.AudioTypeName(x) + "s" });
            var tags = audios.Select(x => new { label = x.Name, genre = "test" + "s" });
            return Json(tags);
        }
    }
}