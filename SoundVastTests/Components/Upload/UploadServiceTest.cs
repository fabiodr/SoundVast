using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Repository;
using SoundVast.Validation;
using System.Threading.Tasks;
using SoundVast.Components.Upload;
using SoundVast.Storage.CloudStorage;

namespace SoundVastTests.Components.Upload
{
    [TestFixture]
    public class UploadServiceTest
    {
        private UploadService _songService;
        private Mock<IUploadValidator> _mockUploadValidator;

        [SetUp]
        public void Init()
        {
            _mockUploadValidator = new Mock<IUploadValidator>();

            _songService = new UploadService(_mockUploadValidator.Object);
        }

        [Test]
        public async Task ShouldUploadCoverImage()
        {
            const string contentType = "image/jpeg";
            var stream = new MemoryStream();
            var mockBlob = new Mock<ICloudBlob>();

            mockBlob.Setup(x => x.UploadFromStreamAsync(stream, contentType)).Returns(Task.CompletedTask);
            _mockUploadValidator.Setup(x => x.ValidateUploadCoverImage(stream.Length));

            await _songService.UploadCoverImage(mockBlob.Object, stream, contentType);

            _mockUploadValidator.VerifyAll();
            mockBlob.VerifyAll();
        }
    }
}
