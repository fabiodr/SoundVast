using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SoundVast.CustomHelpers;
using SoundVast.Utilities;
using Microsoft.Extensions.Configuration;
using SoundVast.Storage.FileStorage;
using SoundVast.Storage.CloudStorage;
using SoundVast.Components.Upload.ViewModels;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.FileStream;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public class UploadController : Controller
    {
        private readonly IFileStorage _fileStorage;
        private readonly ICloudStorage _cloudStorage;
        private readonly ISongService _songService;
        private readonly UserManager<ApplicationUser> _userManager;

        public UploadController(IFileStorage fileStorage, ICloudStorage cloudStorage,
            ISongService songService, UserManager<ApplicationUser> userManager)
        {
            _fileStorage = fileStorage;
            _cloudStorage = cloudStorage;
            _songService = songService;
            _userManager = userManager;
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SaveMusic([FromBody] SaveUploadViewModel viewModel)
        {
            var model = new SongModel
            {
                Name = viewModel.Name,
                Artist = viewModel.Artist,
                CoverImageUrl = viewModel.CoverImageUrl,
                GenreId = viewModel.GenreId,
                UserId = _userManager.GetUserId(User)
            };

            try
            {
                _songService.Add(model);
            }
            catch (ValidationException e)
            {
                ModelState.AddModelErrors(e);

                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertToJson());
            }

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> ConvertToMp3(IFormFile file)
        {
            var audioPath = await _fileStorage.ConvertToMp3(file);

            return Ok(new
            {
                audioName = file.FileName,
                fileLength = file.Length,
                audioPath
            });
        }

        [HttpPost]
        public async Task<IActionResult> UploadCoverImage(IFormFile file)
        {
            var imageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, file.FileName);

            try
            {
                await _songService.UploadCoverImage(imageBlob, file.OpenReadStream(), file.ContentType);
            }
            catch (ValidationException e)
            {
                ModelState.AddModelErrors(e);

                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertToJson());
            }

            return Ok(new
            {
                imagePath = imageBlob.CloudBlockBlob.Uri.AbsoluteUri
            });
        }

        [HttpPost]
        public async Task<IActionResult> UploadMp3([FromBody] UploadViewModel viewModel)
        {
            var audioBlob = _cloudStorage.GetBlob(CloudStorageType.Audio, Path.GetFileNameWithoutExtension(viewModel.AudioName));

            await audioBlob.UploadChunksFromPathAsync(viewModel.AudioPath, "audio/mpeg", viewModel.FileLength, viewModel.ProgressId);

            return Ok();
        }

        [HttpGet]
        public IActionResult UploadProgress(string progressId)
        {
            Response.ContentType = "text/event-stream";

            var progressPercent = AzureBlob.GetProgressPercent(progressId);
            const int progressRetryMilliseconds = 50;

            return Ok($"retry: {progressRetryMilliseconds}\ndata: {progressPercent}\n\n");
        }

        //public void TempStoreAudioFile(IFormFile file, string mp3TempName)
        //{
        //    var destPathToStoreAt = _configuration["Directory:TempResources"] + file.FileName;
        //    var mp3DestPathToStoreAt = _configuration["Directory:TempResources"] + mp3TempName;




        //    _fileStorage.ReadMp3Bytes(file);
        //    System.IO.File.WriteAllBytes(destPathToStoreAt, _fileStorage.AudioBytes);
        //    _fileStorage.ConvertToMp3(file.FileName, destPathToStoreAt, mp3DestPathToStoreAt);
        //}

        //[HttpPost]
        //public JsonResult ImageData(string fileName)
        //{
        //    var fileProperties = _cloudStorage.GetBlob(AzureCloudStorageType.Image, fileName).FileProperties;

        //    var imageData = new
        //    {
        //        fileProperties.Size,
        //        fileProperties.Uri.AbsoluteUri
        //    };

        //    return Json(imageData);
        //}

        //[HttpPost]
        //public void TempStoreImageFile(IFormFile file)
        //{
        //    var convertedImageName = Path.ChangeExtension(file.FileName, "jpg");

        //    _fileStorage.ReadJpgBytes(file, FileStorage.CoverImageWidth, FileStorage.CoverImageHeight);
        //    System.IO.File.WriteAllBytes(_configuration["Directory:TempResources"] + convertedImageName, _fileStorage.ImageBytes);            
        //}
    }
}