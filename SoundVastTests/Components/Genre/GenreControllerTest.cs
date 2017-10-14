using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;

namespace SoundVastTests.Components.Genre
{
    [TestFixture]
    public class GenreControllerTest
    {
        private Mock<IGenreService> _mockGenreService;
        private GenreController _genreController;

        [SetUp]
        public void Init()
        {
            _mockGenreService = new Mock<IGenreService>();
            _genreController = new GenreController(_mockGenreService.Object);
        }

        [Test]
        public void ShouldGetMusicGenres()
        {
            var musicGenres = new List<SoundVast.Components.Genre.Models.Genre>();

            _mockGenreService.Setup(x => x.GetMusicGenres()).Returns(musicGenres);

            var result = (OkObjectResult)_genreController.GetMusicGenres();

            result.Value.ShouldBeEquivalentTo(new {
                musicGenres
            });
        }

        [Test]
        public void ShouldGetLiveStreamGenres()
        {
            var liveStreamGenres = new List<SoundVast.Components.Genre.Models.Genre>();

            _mockGenreService.Setup(x => x.GetLiveStreamGenres()).Returns(liveStreamGenres);

            var result = (OkObjectResult)_genreController.GetLiveStreamGenres();

            result.Value.ShouldBeEquivalentTo(new
            {
                liveStreamGenres
            });
        }
    }
}
