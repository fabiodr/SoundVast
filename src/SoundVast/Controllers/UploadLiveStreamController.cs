using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.IdentityModel.Claims;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SoundVast.CustomHelpers;
using SoundVast.Data;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.UploadLiveStreamViewModels;
using SoundVast.ServiceLayer;
using SoundVast.Repository;
using SoundVast.Utilities;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UploadLiveStreamController : CustomBaseController
    {
        private readonly ICategoryService<LiveStreamCategory> _categoryService;
        private readonly ILiveStreamService _liveStreamService;
        private readonly IAzureConfig _azureConfig;

        public UploadLiveStreamController(IAzureConfig azureConfig, ICategoryService<LiveStreamCategory> categoryService, 
            ILiveStreamService liveStreamService)
        {
            _azureConfig = azureConfig;
            _categoryService = categoryService;
            _liveStreamService = liveStreamService;
        }

        public PartialViewResult LiveStreamCreate()
        {
            var genresSelectList = new MultiSelectList(_categoryService.GetCategories(), "id", "name");

            return PartialView("_LiveStreamCreate", new LiveStreamCreateViewModel { GenresSelectList = genresSelectList });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult UploadLiveStream([Bind(Prefix = "")] IList<LiveStreamCreateViewModel> liveStreamCreateViewModels)
        {
            var uploadData = new UploadData(_azureConfig);

            foreach (var liveStreamCreateViewModel in liveStreamCreateViewModels)
            {
                var jpgFileName = Path.ChangeExtension(liveStreamCreateViewModel.Image, "jpg");
                uploadData.UploadFileFromTemp(_azureConfig.ContainerImage, _azureConfig.ImageConverterResource.RootPath + jpgFileName, jpgFileName, "image/jpeg");

                var liveStream = new LiveStream(User.FindFirst(ClaimTypes.NameIdentifier).Value)
                {
                    Name = liveStreamCreateViewModel.Name,
                    AudioUrl = liveStreamCreateViewModel.AudioUrl,
                    WebsiteUrl = liveStreamCreateViewModel.WebsiteUrl,
                    //Genres = _categoryService.GetSelectedCategories(liveStreamCreateViewModel.SelectedGenreIds).Cast<Genre>().ToList(),
                    ImageFile = new ImageFile(jpgFileName)
                };

                if (!_liveStreamService.Add(liveStream))
                {
                    return RedirectToAction("Upload", "UploadMain");
                }
            }

            return RedirectToAction("AllLiveStreams", "LiveStream", new { area = "LiveStreams" });
        }
    }
}