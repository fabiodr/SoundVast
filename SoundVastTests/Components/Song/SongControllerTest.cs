using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using Stream = SoundVast.Utilities.Stream;

namespace SoundVastTests.Components.Song
{
    [TestFixture]
    public class SongControllerTest
    {
        private SongController _songController;
        private Mock<IAudioService> _mockAudioService;
        private Mock<ICloudStorage> _mockCloudStorage;
        private Mock<UserManager<ApplicationUser>> _mockUserManager;
        private const string UserId = "FEKFJ-GKFKL";

        [SetUp]
        public void Init()
        {
            var userStore = new Mock<IUserStore<ApplicationUser>>();

            _mockUserManager = new Mock<UserManager<ApplicationUser>>(userStore.Object, null, null, null, null, null, null, null, null);
            _mockAudioService = new Mock<IAudioService>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _songController = new SongController(_mockAudioService.Object, _mockCloudStorage.Object, _mockUserManager.Object);
        }

        [Test]
        public void GetSongs()
        {
            var songs = new List<AudioModel>
            {
                new AudioModel(),
                new AudioModel()
            };

            _mockAudioService.Setup(x => x.GetSongs(It.IsAny<int>(), It.IsAny<int>())).Returns(songs);

            var result = (OkObjectResult)_songController.GetSongs(0, 30);

            result.Value.ShouldBeEquivalentTo(new
            {
                songs,
                hasMore = true
            });
        }

        [Test]
        public void Stream()
        {
            var song = new AudioModel
            {
                Name = "test"
            };

            _songController.ControllerContext.HttpContext = new DefaultHttpContext();

            _mockAudioService.Setup(x => x.GetAudio(It.IsAny<int>())).Returns(song);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, song.Name));

            var result = _songController.Stream(22);

            _mockAudioService.VerifyAll();
            _mockCloudStorage.VerifyAll();

            var responseHeaders = _songController.ControllerContext.HttpContext.Response.Headers;

            responseHeaders.ContainsKey("Content-Disposition").Should().BeTrue();

            result.Should().BeOfType<Stream>();
        }

        [Test]
        public void Rate_ShouldRateSong()
        {
            var model = new RateSongModel
            {
                Id = 2,
                Liked = true
            };

            _mockUserManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(UserId);
            _mockAudioService.Setup(x => x.RateAudio(model.Id, model.Liked, UserId));

            var result = (OkObjectResult)_songController.RateSong(model);

            _mockUserManager.VerifyAll();
            _mockAudioService.VerifyAll();

            result.Value.ShouldBeEquivalentTo(new
            {
                ratingId = 0,
            });
        }
    }
}
