using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Components.User.Profile;

namespace SoundVastTests.Components.User.Profile
{
    [TestFixture]
    public class ProfileControllerTest
    {
        private ProfileController _profileController;
        private Mock<IUserService> _mockUserService;
        private Mock<UserManager<ApplicationUser>> _mockUserManager;

        [SetUp]
        public void Init()
        {
            var userStore = new Mock<IUserStore<ApplicationUser>>();

            _mockUserService = new Mock<IUserService>();
            _mockUserManager = new Mock<UserManager<ApplicationUser>>(userStore.Object, null, null, null, null, null, null, null, null);

            _profileController = new ProfileController(_mockUserService.Object, _mockUserManager.Object);
        }

        [Test]
        public void GetsUserUploads()
        {
            const string userId = "DORPE-12354-DSADD";
            var userAudios = new List<SongModel>
            {
                new SongModel(),
                new SongModel()
            };

            _mockUserManager.Setup(x => x.GetUserId(It.IsAny<ClaimsPrincipal>())).Returns(userId);
            _mockUserService.Setup(x => x.GetUploadsForUser(userId)).Returns(userAudios);

            var result = (OkObjectResult)_profileController.GetUserUploads();

            result.Value.ShouldBeEquivalentTo(new
            {
                userAudios
            });
        }
    }
}
