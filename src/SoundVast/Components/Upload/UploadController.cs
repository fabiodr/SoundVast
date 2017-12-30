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
using SoundVast.Components.LiveStream;
using SoundVast.Components.LiveStream.Models;
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
        private readonly IUploadService _uploadService;

        public UploadController(IFileStorage fileStorage, ICloudStorage cloudStorage, IUploadService uploadService)
        {
            _fileStorage = fileStorage;
            _cloudStorage = cloudStorage;
            _uploadService = uploadService;
        }

        [HttpPost]
        public async Task<IActionResult> UploadSong(IFormFile file)
        {
            var audioPath = await _fileStorage.ConvertToMp3(file);
            var audioBlob = _cloudStorage.GetBlob(CloudStorageType.Audio, Path.GetFileNameWithoutExtension(file.FileName));

            await audioBlob.UploadChunksFromPathAsync(audioPath, "audio/mpeg", file.Length);

            return Ok();
        }

        public IActionResult GetPlaceholderImage()
        {
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            return Ok(new
            {
                imagePath = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
            });
        }

        [HttpPost]
        public async Task<IActionResult> UploadCoverImage(IFormFile file)
        {
            var imageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, file.FileName);

            try
            {
                await _uploadService.UploadCoverImage(imageBlob, file.OpenReadStream(), file.ContentType);
            }
            catch (ValidationException e)
            {
                ModelState.AddModelErrors(e);

                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
            }

            return Ok(new
            {
                imagePath = imageBlob.CloudBlockBlob.Uri.AbsoluteUri
            });
        }

        //[HttpGet]
        //public IActionResult UploadProgress(string progressId)
        //{
        //    Response.ContentType = "text/event-stream";

        //    var progressPercent = AzureBlob.GetProgressPercent(progressId);
        //    const int progressRetryMilliseconds = 50;

        //    return Ok($"retry: {progressRetryMilliseconds}\ndata: {progressPercent}\n\n");
        //}

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