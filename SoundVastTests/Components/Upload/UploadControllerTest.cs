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
            const string audioName = "testFile.mp3";
            var processAudio = new ProcessAudio
            {
                AudioPath = Path.Combine("testPath", audioName),
                AudioName = audioName
            };

            var mockAudioBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockFile = new Mock<IFormFile>();

            _mockFileStorage.Setup(x => x.TempStoreMp3Data(mockFile.Object)).ReturnsAsync(processAudio);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, audioName)).Returns(mockAudioBlob.Object);
            mockAudioBlob.Setup(x => x.UploadFromPathAsync(processAudio.AudioPath, ProcessAudio.AudioContentType)).Returns(Task.CompletedTask);

            var result = await _uploadController.Upload(mockFile.Object);

            mockAudioBlob.VerifyAll();

            result.Should().BeOfType<OkResult>();
        }

        [Test]
        public async Task ShouldFetchMetadata()
        {
            const string coverImageName = "testFile.jpg";
            var files = new List<IFormFile>();
            var audioFileMetadata = new AudioFileMetadata
            {
                CoverImageName = coverImageName,
                CoverImagePath = Path.Combine("testPath", coverImageName),
                Metadata = new Dictionary<string, string>
                {
                    { "title", "kalimba" },
                    { "album", "kalimba Album" }
                }
            };

            var mockCoverImageBlob = new Mock<SoundVast.Storage.CloudStorage.ICloudBlob>();
            var mockFile = new Mock<IFormFile>();

            mockCoverImageBlob.Setup(x => x.FileProperties).Returns(new CloudStorageProperties
            {
                Uri = new Uri("localhost://test.com")
            });

            _mockFileStorage.Setup(x => x.GetAudioFileMetadata(mockFile.Object)).ReturnsAsync(audioFileMetadata);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Image, audioFileMetadata.CoverImageName)).Returns(mockCoverImageBlob.Object);
            mockCoverImageBlob.Setup(x => x.UploadFromPathAsync(audioFileMetadata.CoverImagePath, AudioFileMetadata.CoverImageContentType)).Returns(Task.CompletedTask);

            files.Add(mockFile.Object);

            var result = (OkObjectResult)await _uploadController.FetchFilesMetadata(files);

            mockCoverImageBlob.VerifyAll();

            result.Should().BeOfType<OkObjectResult>();

            var expected = new
            {
                audioFileMetadatas = new List<IDictionary<string, string>>()
                {
                    new Dictionary<string, string>
                    {
                        {"title", "kalimba"},
                        {"album", "kalimba Album"},
                        {"previewCoverImageUrl", "localhost://test.com/"}
                    }
                }
            };

            result.Value.ShouldBeEquivalentTo(expected);
        }
    }
}
