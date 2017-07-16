using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage.Blob;
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
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Mvc.Rendering;
using SoundVast.Components;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.FileStream;
using SoundVast.Components.FileStream.Models;
using SoundVast.Storage.CloudStorage;

namespace SoundVastTests.Components.Upload
{
    [TestFixture]
    public class UploadControllerTest
    {
        private UploadController _uploadController;
        private Mock<IValidationDictionary> _mockValidationDictionary;
        private Mock<IFileStorage> _mockFileStorage;
        private Mock<ICloudStorage> _mockCloudStorage;
        private Mock<IUploadService> _mockUploadService;

        [SetUp]
        public void Init()
        {
            _mockValidationDictionary = new Mock<IValidationDictionary>();
            _mockFileStorage = new Mock<IFileStorage>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _mockUploadService = new Mock<IUploadService>();
            _mockValidationDictionary.Setup(x => x.ConvertToJson()).Returns("error");

            _uploadController = new UploadController(_mockValidationDictionary.Object, _mockFileStorage.Object, _mockCloudStorage.Object,
                _mockUploadService.Object);
        }

        [Test]
        public void SaveShouldAddUploadToDatabase()
        {
            var viewModel = new SaveUploadViewModel
            {
                Name = "bubble",
                Artist = "bubbleArtist",
                CoverImageUrl = "bubble.jpg",
                GenreId = 2
            };
            var model = new AudioModel();

            _mockUploadService.Setup(x => x.Add(It.IsAny<AudioModel>())).Callback<AudioModel>(x => model = x);

            _uploadController.Save(viewModel);

            _mockUploadService.Verify(x => x.Add(It.IsAny<AudioModel>()), Times.Once);
            model.ShouldBeEquivalentTo(new AudioModel
            {
                Name = viewModel.Name,
                Artist = viewModel.Artist,
                CoverImageUrl = viewModel.CoverImageUrl,
                GenreId = viewModel.GenreId
            });
        }

        [Test]
        public void SaveShouldReturnOkIfAddedUploadToDatabaseSuccessfully()
        {
            var viewModel = new SaveUploadViewModel();

            _mockUploadService.Setup(x => x.Add(It.IsAny<AudioModel>())).Returns(true);

            var result = (OkResult)_uploadController.Save(viewModel);

            result.Should().BeOfType<OkResult>();
        }

        [Test]
        public void SaveShouldReturn400IfUnSuccessfullyAddedUploadToDatabase()
        {
            _mockUploadService.Setup(x => x.Add(It.IsAny<AudioModel>())).Returns(false);

            var result = (ObjectResult)_uploadController.Save(new SaveUploadViewModel());

            result.StatusCode.Should().Be((int)HttpStatusCode.BadRequest);
            result.Value.Should().Be("error");
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
        public void ShouldGetUploadProgress()
        {
            const string progressId = "testId";

            _uploadController.ControllerContext.HttpContext = new DefaultHttpContext();

            var result = (OkObjectResult)_uploadController.UploadProgress(progressId);

            result.Value.Should().Be("retry: 50\ndata: 0\n\n");
        }

        [Test]
        public async Task ShouldUploadFiles()
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

            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, audioName)).Returns(mockAudioBlob.Object);
            mockAudioBlob.Setup(x => x.UploadChunksFromPathAsync(viewModel.AudioPath, "audio/mpeg", viewModel.FileLength, viewModel.ProgressId)).Returns(Task.CompletedTask);

            var result = await _uploadController.UploadMp3(viewModel);

            mockAudioBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }
    }
}
