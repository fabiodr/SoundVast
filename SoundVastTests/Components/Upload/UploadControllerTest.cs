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
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.CloudStorage.AzureStorage;
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

            _uploadController = new UploadController(_mockModelState.Object, _mockFileStorage.Object,
                _mockCloudStorage.Object);
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
        public async Task ShouldUploadFiles()
        {
            const string audioFileName = "testFile.mp3";
            const string coverImageFileName = "testFile.jpg";
            var files = new List<IFormFile>();
            var processAudioModel = new ProcessAudioModel
            {
                AudioPath = Path.Combine("testPath", audioFileName),
                CoverImagePath = Path.Combine("testPath", coverImageFileName)
            };

            var mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockCoverImageBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockFile = new Mock<IFormFile>();

            _mockFileStorage.Setup(x => x.TempStoreMp3Data(mockFile.Object)).ReturnsAsync(processAudioModel);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, audioFileName)).Returns(mockAudioBlob.Object);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Image, coverImageFileName)).Returns(mockCoverImageBlob.Object);
            mockAudioBlob.Setup(x => x.UploadFromPathAsync(processAudioModel.AudioPath, ProcessAudioModel.AudioContentType)).Returns(Task.CompletedTask);
            mockCoverImageBlob.Setup(x => x.UploadFromPathAsync(processAudioModel.CoverImagePath, ProcessAudioModel.CoverImageContentType)).Returns(Task.CompletedTask);

            files.Add(mockFile.Object);

            var result = await _uploadController.Upload(files);

            _mockFileStorage.VerifyAll();
            mockAudioBlob.VerifyAll();
            mockCoverImageBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }

        [Test]
        public async Task ShouldGetMetadata()
        {
            const string audioFileName = "testFile.mp3";
            const string coverImageFileName = "testFile.jpg";
            var files = new List<IFormFile>();
            var processAudioModel = new ProcessAudioModel
            {
                AudioPath = Path.Combine("testPath", audioFileName),
                CoverImagePath = Path.Combine("testPath", coverImageFileName)
            };

            var mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockCoverImageBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockFile = new Mock<IFormFile>();

            _mockFileStorage.Setup(x => x.TempStoreMp3Data(mockFile.Object)).ReturnsAsync(processAudioModel);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, audioFileName)).Returns(mockAudioBlob.Object);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Image, coverImageFileName)).Returns(mockCoverImageBlob.Object);
            mockAudioBlob.Setup(x => x.UploadFromPathAsync(processAudioModel.AudioPath, ProcessAudioModel.AudioContentType)).Returns(Task.CompletedTask);
            mockCoverImageBlob.Setup(x => x.UploadFromPathAsync(processAudioModel.CoverImagePath, ProcessAudioModel.CoverImageContentType)).Returns(Task.CompletedTask);

            files.Add(mockFile.Object);

            var result = await _uploadController.Upload(files);

            _mockFileStorage.VerifyAll();
            mockAudioBlob.VerifyAll();
            mockCoverImageBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }
    }
}
