//using AutoMapper;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using Microsoft.AspNetCore.Mvc;
//using SoundVast.Components.Audio;
//using SoundVast.Components.Audio.Models;
//using SoundVast.Components.FileStream;
//using SoundVast.Components.FileStream.Models;
//using SoundVast.Components.FileStream.ViewModels;
//using SoundVast.Components.LiveStream;
//using SoundVast.Components.LiveStream.Models;
//using SoundVast.Components.LiveStream.ViewModels;
//using SoundVast.Utilities;
//using SoundVast.QueryOptions;

//namespace SoundVast.Components.Search
//{
//    public class SearchController : CustomBaseController
//    {
//        private readonly IAudioService<SongModel> _audioService;
//        private readonly IFileStreamService _fileStreamService;
//        private readonly ILiveStreamService _liveStreamService;

//        public SearchController(IMapper mapper, IServiceProvider serviceProvider, IAudioService<SongModel> audioService,
//            IFileStreamService fileStreamService, ILiveStreamService liveStreamService)
//            : base(mapper, serviceProvider)
//        {
//            _audioService = audioService;
//            _fileStreamService = fileStreamService;
//            _liveStreamService = liveStreamService;
//        }

//        //[HttpPost]
//        ////[OutputCache(CacheProfile = "SearchTags")]
//        //public JsonResult GetSearchTags()
//        //{
//        //    var audios = _audioService.GetAudiosForSearchTags();
//        //    var tags = audios.Select(x => new { label = x.Name, category = x.Category.Name });

//        //    return Json(tags);
//        //}

//        //public IActionResult Search(string search, int pageNumber = 1)
//        //{
//        //    var audios = _audioService.GetAudiosForSearch();
//        //    var audioViewModels = new List<AudiosViewModel>();

//        //    audioViewModels.AddRange(Mapper.Map<IEnumerable<FileStreamsViewModel>>(audios.OfType<FileStreamModel>()));
//        //    audioViewModels.AddRange(Mapper.Map<IEnumerable<LiveStreamsViewModel>>(audios.OfType<LiveStreamModel>()));

//        //    foreach (var audioViewModel in audioViewModels)
//        //    {
//        //        audioViewModel.LevenshteinScore = Levenshtein.iLD(audioViewModel.Name, search);
//        //    }

//        //    audioViewModels.AsQueryable().WithOrdering(new OrderingOption<AudiosViewModel, int>(x => x.LevenshteinScore));

//        //    return ViewOrPartial("Audio/Audios", audioViewModels);
//        //}
//    }
//}