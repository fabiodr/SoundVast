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
using System.Threading.Tasks;
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
        public async Task<IActionResult> Upload(IEnumerable<IFormFile> files)
        {
            foreach (var file in files)
            {
                var processAudioModel = await _fileStorage.TempStoreMp3Data(file);
                var mp3FileName = Path.GetFileName(processAudioModel.AudioPath);
                var coverImageFileName = Path.GetFileName(processAudioModel.CoverImagePath);
                var audioBlob = _cloudStorage.GetBlob(CloudStorageType.Audio, mp3FileName);
                var coverImageBlob = _cloudStorage.GetBlob(CloudStorageType.Image, coverImageFileName);

                await audioBlob.UploadFromPathAsync(processAudioModel.AudioPath, ProcessAudioModel.AudioContentType);
                await coverImageBlob.UploadFromPathAsync(processAudioModel.CoverImagePath, ProcessAudioModel.CoverImageContentType);
            }

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