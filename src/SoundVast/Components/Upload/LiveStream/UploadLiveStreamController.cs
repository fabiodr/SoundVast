//using System;
//using System.Collections;
//using System.Collections.Generic;
//using System.ComponentModel;
//using System.Drawing;
//using System.IO;
//using System.Linq;
//using Microsoft.AspNetCore.Mvc;
//using SoundVast.CustomHelpers;
//using SoundVast.Data;
//using SoundVast.Repository;
//using SoundVast.Utilities;
//using Microsoft.AspNetCore.Mvc.Rendering;
//using System.Security.Claims;
//using Microsoft.Extensions.Configuration;
//using SoundVast.Components.Category;
//using SoundVast.Components.Image.Models;
//using SoundVast.Components.LiveStream;
//using SoundVast.Components.LiveStream.Models;
//using SoundVast.Components.Upload.LiveStream.ViewModels;
//using SoundVast.Storage.CloudStorage;

//namespace SoundVast.Components.Upload.LiveStream
//{
//    [AjaxAuthorize]
//    public class UploadLiveStreamController : CustomBaseController
//    {
//        private readonly ICategoryService<LiveStreamCategoryModel> _categoryService;
//        private readonly ILiveStreamService _liveStreamService;
//        private readonly ICloudStorage _cloudStorage;
//        private readonly IConfiguration _configuration;

//        public UploadLiveStreamController(ICloudStorage cloudStorage, ICategoryService<LiveStreamCategoryModel> categoryService, 
//            ILiveStreamService liveStreamService, IConfiguration configuration)
//        {
//            _cloudStorage = cloudStorage;
//            _categoryService = categoryService;
//            _liveStreamService = liveStreamService;
//            _configuration = configuration;
//        }

//        public PartialViewResult LiveStreamCreate()
//        {
//            var genresSelectList = new MultiSelectList(_categoryService.GetCategories(), "id", "name");

//            return PartialView("_LiveStreamCreate", new LiveStreamCreateViewModel { GenresSelectList = genresSelectList });
//        }

//        //[HttpPost]
//        //[ValidateAntiForgeryToken]
//        //public IActionResult UploadLiveStream([Bind(Prefix = "")] IList<LiveStreamCreateViewModel> liveStreamCreateViewModels)
//        //{
//        //    foreach (var liveStreamCreateViewModel in liveStreamCreateViewModels)
//        //    {
//        //        var jpgFileName = Path.ChangeExtension(liveStreamCreateViewModel.Image, "jpg");
//        //        var imageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, jpgFileName);

//        //        imageBlob.UploadFromPathAsync(_configuration["Directory:TempResources"] + jpgFileName, "image/jpg");

//        //        var liveStream = new LiveStream(User.FindFirst(ClaimTypes.NameIdentifier).Value)
//        //        {
//        //            Name = liveStreamCreateViewModel.Name,
//        //            AudioUrl = liveStreamCreateViewModel.AudioUrl,
//        //            WebsiteUrl = liveStreamCreateViewModel.WebsiteUrl,
//        //            //Genres = _categoryService.GetSelectedCategories(liveStreamCreateViewModel.SelectedGenreIds).Cast<Genre>().ToList(),
//        //            ImageFile = new ImageFileModel(jpgFileName)
//        //        };

//        //        if (!_liveStreamService.Add(liveStream))
//        //        {
//        //            return RedirectToAction("Upload", "UploadMain");
//        //        }
//        //    }

//        //    return RedirectToAction("AllLiveStreams", "LiveStream", new { area = "LiveStreams" });
//        //}
//    }
//}