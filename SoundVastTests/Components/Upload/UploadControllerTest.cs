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
using SoundVast.Utilities.ModelState;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using SoundVast.Storage.CloudStorage;

namespace SoundVastTests.Components.Upload
{
    [TestFixture]
    public class UploadControllerTest
    {
        private UploadController _uploadController;
        private Mock<IModelState> _mockModelState;
        private Mock<IFileStorage> _mockFileStorage;
        private Mock<ICloudStorage> _mockCloudStorage;

        [SetUp]
        public void Init()
        {
            _mockModelState = new Mock<IModelState>();
            _mockFileStorage = new Mock<IFileStorage>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _mockModelState.Setup(x => x.ConvertToJson(It.IsAny<ModelStateDictionary>())).Returns("error");

            _uploadController = new UploadController(_mockModelState.Object, _mockFileStorage.Object, _mockCloudStorage.Object);
        }

        [Test]
        public void SaveShouldReturn400IfModelStateInvalid()
        {
            var model = new SaveUploadViewModel();

            var result = (ObjectResult)_uploadController.Save(model);

            result.StatusCode.Should().Be((int)HttpStatusCode.BadRequest);
        }

        [Test]
        public void SaveShouldReturnModelErrorIfModelStateInvalid()
        {
            var model = new SaveUploadViewModel();

            var result = (ObjectResult)_uploadController.Save(model);

            result.Value.Should().Be("error");
        }

        [Test]
        public async Task ShouldTempStoreMp3File()
        {
            const string audioName = "testFile.mp3";
            var audioPath = Path.Combine("testPath", audioName);
            var mockFile = new Mock<IFormFile>();

            mockFile.Setup(x => x.FileName).Returns(audioName);
            _mockFileStorage.Setup(x => x.TempStoreMp3Data(mockFile.Object)).ReturnsAsync(audioPath);
            
            var result = (OkObjectResult)await _uploadController.TempStoreMp3File(mockFile.Object);

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

            result.Value.Should().Be($"retry: 200\ndata: {0}\n\n");
        }

        [Test]
        public async Task ShouldUploadFiles()
        {
            const string progressId = "testId";
            const string audioName = "testFile.mp3";

            var model = new UploadViewModel
            {
                AudioPath = Path.Combine("testPath", audioName),
                AudioName = audioName,
                ProgressId = progressId
            };

            var mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();

            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, audioName)).Returns(mockAudioBlob.Object);
            mockAudioBlob.Setup(x => x.UploadChunksFromPathAsync(model.AudioPath, "audio/mpeg", model.FileLength, model.ProgressId)).Returns(Task.CompletedTask);

            var result = await _uploadController.Upload(model);

            mockAudioBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }
    }
}
