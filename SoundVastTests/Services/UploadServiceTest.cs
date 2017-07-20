using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Upload;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;

namespace SoundVastTests.Services
{
    [TestFixture]
    public class UploadServiceTest
    {
        private UploadService _uploadService;
        private Mock<IValidationProvider> _mockValidationProvider;
        private Mock<IUploadValidator> _mockUploadValidator;
        private Mock<IRepository<AudioModel>> _mockAudioRepository;

        [SetUp]
        public void Init()
        {
            _mockValidationProvider = new Mock<IValidationProvider>();
            _mockUploadValidator = new Mock<IUploadValidator>();
            _mockAudioRepository = new Mock<IRepository<AudioModel>>();

            _uploadService = new UploadService(_mockValidationProvider.Object, _mockUploadValidator.Object, _mockAudioRepository.Object);
        }

        [Test]
        public async Task ShouldUploadCoverImage()
        {
            const string contentType = "image/jpeg";
            var stream = new MemoryStream(); 
            var mockBlob = new Mock<ICloudBlob>();

            mockBlob.Setup(x => x.UploadFromStreamAsync(stream, contentType)).Returns(Task.CompletedTask);
            _mockUploadValidator.Setup(x => x.ValidateUploadCoverImage(stream.Length));

            await _uploadService.UploadCoverImage(mockBlob.Object, stream, contentType);

            _mockUploadValidator.VerifyAll();    
            mockBlob.VerifyAll();
        }

        [Test]
        public void ShouldAddAudioModelToRepository()
        {
            _mockValidationProvider.Setup(x => x.Validate(It.IsAny<AudioModel>()));
            _mockAudioRepository.Setup(x => x.Add(It.IsAny<AudioModel>()));

            _uploadService.Add(new AudioModel());

            _mockValidationProvider.VerifyAll();
            _mockAudioRepository.VerifyAll();
        }
    }
}
