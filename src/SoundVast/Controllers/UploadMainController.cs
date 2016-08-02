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

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UploadMainController : CustomBaseController
    {
        private readonly IAzureConfig _azureConfig;

        public UploadMainController(IAzureConfig azureConfig)
        {
            _azureConfig = azureConfig;
        }

        public IActionResult Upload()
        {
            return ViewOrPartial();
        }

        [HttpPost]
        public JsonResult ImageData(string fileName)
        {
            var blob = _azureConfig.ContainerImage.GetBlockBlobReference(fileName);
            blob.FetchAttributes();
            var fileData = new { size = blob.Properties.Length, uri = blob.Uri.AbsoluteUri };

            return Json(fileData);
        }

        [HttpPost]
        public void TempStoreImageFile(IFormFile file)
        {
            var uploadData = new UploadData(_azureConfig);
            var convertedImageName = Path.ChangeExtension(file.FileName, "jpg");

            uploadData.ReadJpgBytes(file, UploadData.CoverImageWidth, UploadData.CoverImageHeight);
            System.IO.File.WriteAllBytes(_azureConfig.ImageConverterResource.RootPath + convertedImageName, uploadData.ImageBytes);            
        }
    }
}