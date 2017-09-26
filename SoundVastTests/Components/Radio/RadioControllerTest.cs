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
using SoundVast.Components.Radio;
using SoundVast.Components.Radio.Models;

namespace SoundVastTests.Components.Radio
{
    [TestFixture]
    public class RadioControllerTest
    {
        private RadioController _radioController;
        private Mock<IRadioService> _mockRadioService;


        [SetUp]
        public void Init()
        {
            _mockRadioService = new Mock<IRadioService>();
            _radioController = new RadioController(_mockRadioService.Object);
        }

        [Test]
        public void GetRadios()
        {
            var radios = new List<RadioModel>
            {
                new RadioModel(),
                new RadioModel()
            };

            _mockRadioService.Setup(x => x.GetAudios(It.IsAny<int>(), It.IsAny<int>())).Returns(radios);

            var result = (OkObjectResult)_radioController.GetRadios(0, 30);

            result.Value.ShouldBeEquivalentTo(new
            {
                radios,
                hasMore = true
            });
        }
    }
}
