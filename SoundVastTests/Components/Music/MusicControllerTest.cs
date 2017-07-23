using System.Collections.Generic;
using System.Security.Claims;
using FluentAssertions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Music;
using SoundVast.Components.Music.ViewModels;
using SoundVast.Components.User;
using SoundVast.Components.User.Profile;

namespace SoundVastTests.Components.Music
{
    [TestFixture]
    public class MusicControllerTest
    {
        private MusicController _musicController;
        private Mock<IMusicService> _mockMusicService;

        [SetUp]
        public void Init()
        {
            _mockMusicService = new Mock<IMusicService>();

            _musicController = new MusicController(_mockMusicService.Object);
        }

        [Test]
        public void GetsMusic()
        {
            var model = new GetMusicViewModel
            {
                Current = 0,
                Amount = 30
            };
            var musicAudios = new List<AudioModel>
            {
                new AudioModel(),
                new AudioModel()
            };

            _mockMusicService.Setup(x => x.GetMusic(It.IsAny<int>(), It.IsAny<int>())).Returns(musicAudios);

            var result = (OkObjectResult)_musicController.GetMusic(model);

            result.Value.ShouldBeEquivalentTo(new
            {
                musicAudios,
                hasMore = true
            });
        }
    }
}
