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
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.FileStorage;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UploadFileController : CustomBaseController
    {
        private readonly IFileStreamService _audioService;
        private readonly IGenreService<FileStreamGenre> _genreService;       
        private readonly ICategoryService<FileStreamCategory> _categoryService;
        private readonly ICloudStorage _cloudStorage;
        private readonly IFileStorage _fileStorage;
        private readonly IConfiguration _configuration;

        public UploadFileController(IMapper mapper, IServiceProvider serviceProvider, IFileStreamService audioService, 
            IGenreService<FileStreamGenre> genreService, ICategoryService<FileStreamCategory> categoryService,
            ICloudStorage cloudStorage, IFileStorage fileStorage, IConfiguration configuration) 
            : base(mapper, serviceProvider)
        {
            _audioService = audioService;
            _genreService = genreService;
            _categoryService = categoryService;
            _cloudStorage = cloudStorage;
            _fileStorage = fileStorage;
            _configuration = configuration;
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
            var destPathToStoreAt = _configuration["Directory:TempResources"] + file.FileName;
            var mp3DestPathToStoreAt = _configuration["Directory:TempResources"] + mp3TempName;

            _fileStorage.ReadMp3Bytes(file);
            System.IO.File.WriteAllBytes(destPathToStoreAt, _fileStorage.AudioBytes);
            _fileStorage.ConvertToMp3(file.FileName, destPathToStoreAt, mp3DestPathToStoreAt);
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
            var zippedUploadViewModels = requiredUploadFileViewModels.Zip(additionalUploadFileViewModels, (r, a) => new { Required = r, Additional = a });

            foreach (var zippedUploadViewModel in zippedUploadViewModels)
            {
                var mp3FileName = Path.ChangeExtension(zippedUploadViewModel.Required.TempAudioName, "mp3");
                var jpgFileName = Path.ChangeExtension(zippedUploadViewModel.Required.Image, "jpg");
                var audioBlob = _cloudStorage.GetBlob(CloudStorageType.Audio, mp3FileName);
                var imageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, jpgFileName);

                audioBlob.UploadFromPath(_configuration["Directory:TempResources"] + mp3FileName, "audio/mpeg");
                imageBlob.UploadFromPath(_configuration["Directory:TempResources"] + jpgFileName, "image/jpg");

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