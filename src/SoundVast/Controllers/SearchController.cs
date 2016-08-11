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
using SoundVast.Models.AudioViewModels;
using SoundVast.Utilities;
using SoundVast.Filters;
using SoundVast.QueryOptions;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.FileStreamViewModels;
using SoundVast.Models.LiveStreamViewModels;

namespace SoundVast.Controllers
{
    public class SearchController : CustomBaseController
    {
        private readonly IAudioService<Audio> _audioService;
        private readonly IFileStreamService _fileStreamService;
        private readonly ILiveStreamService _liveStreamService;

        public SearchController(IMapper mapper, IServiceProvider serviceProvider, IAudioService<Audio> audioService,
            IFileStreamService fileStreamService, ILiveStreamService liveStreamService)
            : base(mapper, serviceProvider)
        {
            _audioService = audioService;
            _fileStreamService = fileStreamService;
            _liveStreamService = liveStreamService;
        }

        [HttpPost]
        //[OutputCache(CacheProfile = "SearchTags")]
        public JsonResult GetSearchTags()
        {
            var audios = _audioService.GetAudiosForSearchTags();
            var tags = audios.Select(x => new { label = x.Name, category = x.Category.Name });

            return Json(tags);
        }

        public IActionResult Search(string search, int pageNumber = 1)
        {
            var audios = _audioService.GetAudiosForSearch();
            var audioViewModels = new List<AudiosViewModel>();

            audioViewModels.AddRange(Mapper.Map<IEnumerable<FileStreamsViewModel>>(audios.OfType<FileStream>()));
            audioViewModels.AddRange(Mapper.Map<IEnumerable<LiveStreamsViewModel>>(audios.OfType<LiveStream>()));

            foreach (var audioViewModel in audioViewModels)
            {
                audioViewModel.LevenshteinScore = Levenshtein.iLD(audioViewModel.Name, search);
            }

            audioViewModels.AsQueryable().WithOrdering(new OrderingOption<AudiosViewModel, int>(x => x.LevenshteinScore));

            return ViewOrPartial("Audio/Audios", audioViewModels);
        }
    }
}