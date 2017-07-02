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
        private Mock<IConfiguration> _mockConfiguration;
        private Mock<ICloudStorage> _mockCloudStorage;

        [SetUp]
        public void Init()
        {
            _mockModelState = new Mock<IModelState>();
            _mockFileStorage = new Mock<IFileStorage>();
            _mockConfiguration = new Mock<IConfiguration>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _mockModelState.Setup(x => x.ConvertToJson(It.IsAny<ModelStateDictionary>())).Returns("error");

            _uploadController = new UploadController(_mockModelState.Object, _mockFileStorage.Object, _mockConfiguration.Object,
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
        public void UploadShouldUploadFiles()
        {
            var files = new List<IFormFile>();

            var path = "testPath://";
            var fileName = "testFile.mp3";
            Mock<SoundVast.Storage.CloudStorage.ICloudBlob> mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockFile = new Mock<IFormFile>();

            mockFile.Setup(x => x.FileName).Returns("testFile.wav");

            var destinationPath = Path.Combine(path, mockFile.Object.FileName);

            mockAudioBlob.Setup(x => x.UploadFromPath(It.IsAny<string>(), "audio/mpeg"));
            _mockConfiguration.Setup(x => x[It.IsAny<string>()]).Returns(path);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, fileName)).Returns(mockAudioBlob.Object);
            _mockFileStorage.Setup(x => x.TempStoreMp3File(mockFile.Object, destinationPath));

            files.Add(mockFile.Object);

            var result = _uploadController.Upload(files);

            _mockFileStorage.VerifyAll();
            mockAudioBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }
    }
}
