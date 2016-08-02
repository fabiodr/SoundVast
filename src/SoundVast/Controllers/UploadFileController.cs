using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Web;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
using System.Threading;
using AutoMapper;
using SoundVast.CustomHelpers;
using System.Diagnostics;
using System.Net;
using SoundVast.Controllers;
using SoundVast.ServiceLayer;
using SoundVast.Repository;
using System.Collections.ObjectModel;
using System.IdentityModel.Claims;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SoundVast.Data;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.UploadFileViewModels;
using SoundVast.QueryOptions;
using SoundVast.Utilities;
using FileStream = SoundVast.Models.FileStreamModels.FileStream;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UploadFileController : CustomBaseController
    {
        private readonly IFileStreamService _audioService;
        private readonly IGenreService<FileStreamGenre> _genreService;       
        private readonly ICategoryService<FileStreamCategory> _categoryService;
        private readonly IAzureConfig _azureConfig;

        public UploadFileController(IMapper mapper, IServiceProvider serviceProvider, IAzureConfig azureConfig, IFileStreamService audioService, 
            IGenreService<FileStreamGenre> genreService, ICategoryService<FileStreamCategory> categoryService) 
            : base(mapper, serviceProvider)
        {
            _azureConfig = azureConfig;
            _audioService = audioService;
            _genreService = genreService;
            _categoryService = categoryService;
        }

        [HttpPost]
        //[OutputCache(CacheProfile = "SearchTags")]
        public JsonResult GetAudioNames()
        {
            var audios = _audioService.GetAudios();

            var tags = audios.Select(x => new { label = x.Name });

            return Json(tags);
        }

        [HttpPost]
        public void TempStoreAudioFile(IFormFile file, string mp3TempName)
        {
            var uploadData = new UploadData(_azureConfig);
            var destPathToStoreAt = _azureConfig.AudioConverterResource.RootPath + file.FileName;
            var mp3DestPathToStoreAt = _azureConfig.AudioConverterResource.RootPath + mp3TempName;

            uploadData.ReadMp3Bytes(file);
            System.IO.File.WriteAllBytes(destPathToStoreAt, uploadData.AudioBytes);
            uploadData.ConvertToMp3(file.FileName, destPathToStoreAt, mp3DestPathToStoreAt);
        }

        [HttpPost]
        public JsonResult HandleFiles(IFormCollection files)
        {
            var requiredUploadFileViewModels = new List<RequiredUploadFileViewModel>(files.Count);
            var additionalUploadFileViewModels = new List<AdditionalUploadFileViewModel>(files.Count);

            foreach (var file in files.Files)
            {
                requiredUploadFileViewModels.Add(new RequiredUploadFileViewModel
                {
                    Name = Path.GetFileNameWithoutExtension(file.FileName),
                    TempAudioName = file.FileName,
                    SelectCategoryViewModel = new SelectCategoryViewModel { CategorySelectList = new SelectList(_categoryService.GetCategories(), "Id", "Name") }
                });

                additionalUploadFileViewModels.Add(new AdditionalUploadFileViewModel());

                TempStoreAudioFile(file, file.FileName);
            }

            //Return two partials so we don't need two HTTP Requests
            var requiredFileDetailsPartialView = RenderPartialViewToString("FileDetails", requiredUploadFileViewModels);
            var additionalFileDetailsPartialView = RenderPartialViewToString("FileDetails", additionalUploadFileViewModels);

            return Json(new { requiredFileDetailsPartialView, additionalFileDetailsPartialView });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult UploadFile([Bind(Prefix = "")] IEnumerable<RequiredUploadFileViewModel> requiredUploadFileViewModels,
            [Bind(Prefix = "")] IEnumerable<AdditionalUploadFileViewModel> additionalUploadFileViewModels)
        {
            var uploadData = new UploadData(_azureConfig);
            var zippedUploadViewModels = requiredUploadFileViewModels.Zip(additionalUploadFileViewModels, (r, a) => new { Required = r, Additional = a });

            foreach (var zippedUploadViewModel in zippedUploadViewModels)
            {
                var mp3FileName = Path.ChangeExtension(zippedUploadViewModel.Required.TempAudioName, "mp3");
                var jpgFileName = Path.ChangeExtension(zippedUploadViewModel.Required.Image, "jpg");

                uploadData.UploadFileFromTemp(_azureConfig.ContainerAudio, _azureConfig.AudioConverterResource.RootPath + mp3FileName, zippedUploadViewModel.Required.Name.Trim() + ".mp3", "audio/mpeg");
                uploadData.UploadFileFromTemp(_azureConfig.ContainerImage, _azureConfig.ImageConverterResource.RootPath + jpgFileName, jpgFileName, "image/jpeg");

                var fileStreamMetaData = new FileStream(User.FindFirst(ClaimTypes.NameIdentifier).Value)
                {
                    Name = zippedUploadViewModel.Required.Name,
                    Artist = zippedUploadViewModel.Required.Artist,
                    Album = zippedUploadViewModel.Additional.Album,
                    AudioFile = new AudioFile(mp3FileName),
                    ImageFile = new ImageFile(jpgFileName),
                    Category = _categoryService.GetCategory(zippedUploadViewModel.Required.SelectCategoryViewModel.SelectedCategory),
                    //SimilarAudios = _audioService.GetRelatedAudios(zippedUploadViewModel.Required.Name, Levenshtein.Match.AverageMatch).Cast<Audio>().ToList()
                };

                if (!_audioService.Add(fileStreamMetaData))
                {
                    return RedirectToAction("Upload", "UploadMain");
                }
            }

            return RedirectToAction("FileStreams", "FileStream", new { area = "Audio" });
        }
    }
}