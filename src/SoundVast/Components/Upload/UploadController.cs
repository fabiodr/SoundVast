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
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.FileStorage;
using SoundVast.Components.Upload.ViewModels;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Utilities.ModelState;

namespace SoundVast.Components.Upload
{
    public class UploadController : Controller
    {
        private readonly IModelState _modelState;
        private readonly IFileStorage _fileStorage;
        private readonly ICloudStorage _cloudStorage;

        public UploadController(IModelState modelState, IFileStorage fileStorage, ICloudStorage cloudStorage)
        {
            _modelState = modelState;
            _fileStorage = fileStorage;
            _cloudStorage = cloudStorage;
        }

        [HttpPost]
        public IActionResult Save(SaveUploadViewModel model)
        {
            if (ModelState.IsValid)
            {

            }
            return StatusCode((int)HttpStatusCode.BadRequest, _modelState.ConvertToJson(ModelState));
        }

        [HttpPost]
        public async Task<IActionResult> TempStoreMp3File(IFormFile file)
        {
            var processAudio = await _fileStorage.TempStoreMp3Data(file);

            return Ok(new
            {
                audioName = processAudio.AudioName,
                audioPath = processAudio.AudioPath,
                fileLength = file.Length
            });
        }

        [HttpGet]
        public IActionResult UploadProgress(string progressId)
        {
            Response.ContentType = "text/event-stream";

            AzureBlob.UploadProgresses.TryGetValue(progressId, out int progressPercent);

            if (progressPercent == 100)
            {
                AzureBlob.UploadProgresses.Remove(progressId);
            }
            
            return Ok($"retry: 200\ndata: {progressPercent}\n\n"
            );
        }

        [HttpPost]
        public async Task<IActionResult> Upload([FromBody] UploadViewModel model)
        {
            var audioBlob = _cloudStorage.GetBlob(CloudStorageType.Audio, model.AudioName);
            await audioBlob.UploadChunksFromPathAsync(model.AudioPath, model.FileLength, model.ProgressId);

            return Ok();
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
        //    var fileProperties = _cloudStorage.GetBlob(CloudStorageType.Image, fileName).FileProperties;

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