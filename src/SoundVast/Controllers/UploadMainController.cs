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
using SoundVast.CloudStorage;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UploadMainController : CustomBaseController
    {
        private readonly IFileStorage _fileStorage;
        private readonly ICloudStorage _cloudStorage;
        private readonly IConfigurationRoot _configuration;

        public UploadMainController(IFileStorage fileStorage, ICloudStorage cloudStorage, IConfigurationRoot configuration)
        {
            _fileStorage = fileStorage;
            _cloudStorage = cloudStorage;
            _configuration = configuration;
        }

        public IActionResult Upload()
        {
            return ViewOrPartial();
        }

        [HttpPost]
        public JsonResult ImageData(string fileName)
        {
            var fileProperties = _cloudStorage.GetFileProperties(fileName);
            var imageData = new
            {
                size = fileProperties.Size,
                Uri = fileProperties.Uri
            };

            return Json(imageData);
        }

        [HttpPost]
        public void TempStoreImageFile(IFormFile file)
        {
            var convertedImageName = Path.ChangeExtension(file.FileName, "jpg");

            _fileStorage.ReadJpgBytes(file, FileStorage.CoverImageWidth, FileStorage.CoverImageHeight);
            System.IO.File.WriteAllBytes(_configuration["Directory:TempResources"] + convertedImageName, _fileStorage.ImageBytes);            
        }
    }
}