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
        private Mock<ISongService> _mockSongService;
        private Mock<ICloudStorage> _mockCloudStorage;
        private Mock<UserManager<ApplicationUser>> _mockUserManager;
        private const string UserId = "FEKFJ-GKFKL";

        [SetUp]
        public void Init()
        {
            var userStore = new Mock<IUserStore<ApplicationUser>>();

            _mockUserManager = new Mock<UserManager<ApplicationUser>>(userStore.Object, null, null, null, null, null, null, null, null);
            _mockSongService = new Mock<ISongService>();
            _mockCloudStorage = new Mock<ICloudStorage>();
            _songController = new SongController(_mockSongService.Object, _mockCloudStorage.Object, _mockUserManager.Object);
        }

        [Test]
        public void GetSongs()
        {
            var songs = new List<SongModel>
            {
                new SongModel(),
                new SongModel()
            };

            _mockSongService.Setup(x => x.GetAudios(It.IsAny<int>(), It.IsAny<int>())).Returns(songs);

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
            var song = new SongModel
            {
                Name = "test"
            };

            _songController.ControllerContext.HttpContext = new DefaultHttpContext();

            _mockSongService.Setup(x => x.GetAudio(It.IsAny<int>())).Returns(song);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, song.Name));

            var result = _songController.Stream(22);

            _mockSongService.VerifyAll();
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
            var ratingModel = new RatingModel();

            _mockUserManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(UserId);
            _mockSongService.Setup(x => x.RateAudio(model.Id, model.Liked, UserId)).Returns(ratingModel);

            var result = (OkObjectResult)_songController.RateSong(model);

            _mockUserManager.VerifyAll();
            _mockSongService.VerifyAll();

            result.Value.ShouldBeEquivalentTo(new
            {
                rating = ratingModel
            });
        }
    }
}
