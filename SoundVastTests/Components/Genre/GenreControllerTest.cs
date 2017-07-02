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
        public void ShouldGetGenres()
        {
            var genres = new List<GenreModel>();

            _mockGenreService.Setup(x => x.GetGenres()).Returns(genres);

            var result = (OkObjectResult)_genreController.GetGenres();

            result.Value.ShouldBeEquivalentTo(new {
                genres
            });
        }
    }
}
