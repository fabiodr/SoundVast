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
using SoundVast.Components.LiveStream;
using SoundVast.Components.LiveStream.Models;

namespace SoundVastTests.Components.LiveStream
{
    [TestFixture]
    public class LiveStreamControllerTest
    {
        private LiveStreamController _liveStreamController;
        private Mock<ILiveStreamService> _mockLiveStreamService;


        [SetUp]
        public void Init()
        {
            _mockLiveStreamService = new Mock<ILiveStreamService>();
            _liveStreamController = new LiveStreamController(_mockLiveStreamService.Object);
        }

        [Test]
        public void GetRadios()
        {
            var radios = new List<LiveStreamModel>
            {
                new LiveStreamModel(),
                new LiveStreamModel()
            };

            _mockLiveStreamService.Setup(x => x.GetAudios(It.IsAny<int>(), It.IsAny<int>())).Returns(radios);

            var result = (OkObjectResult)_liveStreamController.GetRadios(0, 30);

            result.Value.ShouldBeEquivalentTo(new
            {
                radios,
                hasMore = true
            });
        }
    }
}
