using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;
using Moq;
using Newtonsoft.Json;
using NUnit.Framework;
using SoundVast.Components.Upload;
using SoundVast.Components.Upload.ViewModels;
using SoundVast.Storage.FileStorage;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.FileStream;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Validation;
using ICloudBlob = SoundVast.Storage.CloudStorage.ICloudBlob;

namespace SoundVastTests.Components.Upload
{
    [TestFixture]
    public class UploadControllerTest
    {
        private UploadController _uploadController;
        private Mock<IFileStorage> _mockFileStorage;
        private Mock<ICloudStorage> _mockCloudStorage;
        private Mock<IUploadService> _mockUploadService;
        private Mock<UserManager<ApplicationUser>> _mockUserManager;

        [SetUp]
        public void Init()
        {
            var userStore = new Mock<IUserStore<ApplicationUser>>();

            _mockFileStorage = new Mock<IFileStorage>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _mockUploadService = new Mock<IUploadService>();
            _mockUserManager = new Mock<UserManager<ApplicationUser>>(userStore.Object, null, null, null, null, null, null, null, null);

            _uploadController = new UploadController(_mockFileStorage.Object, _mockCloudStorage.Object,
                _mockUploadService.Object, _mockUserManager.Object);
        }

        [Test]
        public void SaveShouldAddUploadToDatabase()
        {
            const string userId = "DORPE-12354-DSADD";
            var viewModel = new SaveUploadViewModel
            {
                Name = "bubble",
                Artist = "bubbleArtist",
                CoverImageUrl = "bubble.jpg",
                GenreId = 2
            };
            var model = new AudioModel();

            _mockUserManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(userId);
            _mockUploadService.Setup(x => x.Add(It.IsAny<AudioModel>())).Callback<AudioModel>(x => model = x);

            var result = (OkResult)_uploadController.Save(viewModel);

            _mockUploadService.Verify(x => x.Add(It.IsAny<AudioModel>()), Times.Once);
            model.ShouldBeEquivalentTo(new AudioModel
            {
                Name = viewModel.Name,
                Artist = viewModel.Artist,
                CoverImageUrl = viewModel.CoverImageUrl,
                GenreId = viewModel.GenreId,
                UserId = userId,
            });

            result.Should().BeOfType<OkResult>();
        }

        [Test]
        public void SaveShouldReturnModelErrorsIfUploadThrowsValidationException()
        {
            var validationResult = new ValidationResult("_error", "testError");

            _mockUploadService.Setup(x => x.Add(It.IsAny<AudioModel>())).Throws(new ValidationException(validationResult));

            var result = (ObjectResult)_uploadController.Save(new SaveUploadViewModel());

            result.StatusCode.Should().Be((int)HttpStatusCode.BadRequest);
            result.Value.Should().Be(_uploadController.ModelState.ConvertToJson());
        }

        [Test]
        public async Task ShouldConvertToMp3()
        {
            const string audioName = "testFile.mp3";
            var audioPath = Path.Combine("testPath", audioName);
            var mockFile = new Mock<IFormFile>();

            mockFile.Setup(x => x.FileName).Returns(audioName);
            _mockFileStorage.Setup(x => x.ConvertToMp3(mockFile.Object)).ReturnsAsync(audioPath);

            var result = (OkObjectResult)await _uploadController.ConvertToMp3(mockFile.Object);

            _mockFileStorage.VerifyAll();

            result.Value.ShouldBeEquivalentTo(new
            {
                fileLength = mockFile.Object.Length,
                audioName,
                audioPath
            });
        }

        [Test]
        public async Task ShouldUploadCoverImage()
        {
            const string coverImageName = "testFile.jpg";
            const string contentType = "image/jpeg";
            var stream = new MemoryStream();
            
            var imagePath = Path.Combine("http://www.test.com/", coverImageName);
            var mockFile = new Mock<IFormFile>();
            var imageBlob = new AzureBlob
            {
                CloudBlockBlob = new CloudBlockBlob(new Uri(imagePath))
            };
            
            mockFile.Setup(x => x.OpenReadStream()).Returns(stream);
            mockFile.Setup(x => x.FileName).Returns(coverImageName);
            mockFile.Setup(x => x.ContentType).Returns(contentType);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Image, coverImageName)).Returns(imageBlob);
            _mockUploadService.Setup(x => x.UploadCoverImage(imageBlob, stream, contentType)).Returns(Task.CompletedTask);
            
            var result = (OkObjectResult)await _uploadController.UploadCoverImage(mockFile.Object);

            _mockUploadService.VerifyAll();
            result.Value.ShouldBeEquivalentTo(new
            {
                imagePath = imageBlob.CloudBlockBlob.Uri.AbsoluteUri
            });
        }

        [Test]
        public async Task UploadCoverImageShouldReturnModelErrorsIfUploadThrowsValidationException()
        {
            var validationResult = new ValidationResult("_error", "testError");
            var mockFile = new Mock<IFormFile>();

            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Image, It.IsAny<string>()));
            _mockUploadService.Setup(x => x.UploadCoverImage(It.IsAny<ICloudBlob>(), It.IsAny<Stream>(), It.IsAny<string>()))
                .Throws(new ValidationException(validationResult));

            var result = (ObjectResult)await _uploadController.UploadCoverImage(mockFile.Object);

            result.StatusCode.Should().Be((int)HttpStatusCode.BadRequest);
            result.Value.Should().Be(_uploadController.ModelState.ConvertToJson());
        }

        [Test]
        public async Task ShouldUploadMp3()
        {
            const string progressId = "testId";
            const string audioName = "testFile.mp3";

            var viewModel = new UploadViewModel
            {
                AudioPath = Path.Combine("testPath", audioName),
                AudioName = audioName,
                ProgressId = progressId
            };

            var mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();

            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, Path.GetFileNameWithoutExtension(audioName))).Returns(mockAudioBlob.Object);
            mockAudioBlob.Setup(x => x.UploadChunksFromPathAsync(viewModel.AudioPath, "audio/mpeg", viewModel.FileLength, viewModel.ProgressId)).Returns(Task.CompletedTask);

            var result = await _uploadController.UploadMp3(viewModel);

            mockAudioBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }

        [Test]
        public void ShouldGetUploadProgress()
        {
            const string progressId = "testId";

            _uploadController.ControllerContext.HttpContext = new DefaultHttpContext();

            var result = (OkObjectResult)_uploadController.UploadProgress(progressId);

            result.Value.Should().Be("retry: 50\ndata: 0\n\n");
        }
    }
}
