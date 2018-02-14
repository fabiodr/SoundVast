using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SoundVast.Storage.CloudStorage;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using ByteSizeLib;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public class UploadController : Controller
    {
        private readonly ICloudStorage _cloudStorage;
        private readonly IUploadService _uploadService;

        public UploadController(ICloudStorage cloudStorage, IUploadService uploadService)
        {
            _cloudStorage = cloudStorage;
            _uploadService = uploadService;
        }

        public IActionResult GetPlaceholderImage()
        {
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            return Ok(new
            {
                imagePath = placeholderImage.Uri.AbsoluteUri
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
                imagePath = imageBlob.Uri.AbsoluteUri
            });
        }
    }
}