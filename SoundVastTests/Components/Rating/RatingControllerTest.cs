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
using SoundVast.Components.User;

namespace SoundVastTests.Components.Rating
{
    [TestFixture]
    public class RatingControllerTest
    {
        private RatingController _ratingController;
        private Mock<IAudioService<Audio>> _mockAudioService;
        private Mock<UserManager<ApplicationUser>> _mockUserManager;
        private const string UserId = "FEKFJ-GKFKL";

        [SetUp]
        public void Init()
        {
            var userStore = new Mock<IUserStore<ApplicationUser>>();

            _mockUserManager = new Mock<UserManager<ApplicationUser>>(userStore.Object, null, null, null, null, null, null, null, null);
            _mockAudioService = new Mock<IAudioService<Audio>>();
            _ratingController = new RatingController(_mockAudioService.Object, _mockUserManager.Object);
        }

        [Test]
        public void RateAudio_ShouldRateAudio()
        {
            var model = new RateAudioModel
            {
                AudioId = 2,
                Liked = true
            };
            var ratingModel = new SoundVast.Components.Rating.Models.Rating();

            _mockUserManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(UserId);
            _mockAudioService.Setup(x => x.RateAudio(model.AudioId, model.Liked, UserId)).Returns(ratingModel);

            var result = (OkObjectResult)_ratingController.RateAudio(model);

            _mockUserManager.VerifyAll();
            _mockAudioService.VerifyAll();

            result.Value.ShouldBeEquivalentTo(new
            {
                rating = ratingModel
            });
        }
    }
}
