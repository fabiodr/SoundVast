﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVastTests.Components.Genre
{
    [TestFixture]
    public class GenreServiceTest
    {
        private Mock<IRepository<GenreModel>> _mockGenreRepository;
        private GenreService _genreService;

        [SetUp]
        public void Init()
        {
            _mockGenreRepository = new Mock<IRepository<GenreModel>>();
     
            _genreService = new GenreService(_mockGenreRepository.Object);
        }

        [Test]
        public void GetMusicGenres_ReturnOnlyMusicGenres()
        {
            var genres = new List<GenreModel>
            {
                new GenreModel {Name = "Pop", Type = GenreType.Music},
                new GenreModel {Name = "Football", Type = GenreType.LiveStream},
            }.AsQueryable();
      
            _mockGenreRepository.Setup(x => x.GetAll()).Returns(genres);

            var musicGenres = _genreService.GetMusicGenres();

            musicGenres.ElementAt(0).Should().Be(genres.ElementAt(0));
            musicGenres.Count.Should().Be(1);
        }

        [Test]
        public void GetMusicGenres_ReturnOnlyLiveStreamGenres()
        {
            var genres = new List<GenreModel>
            {
                new GenreModel {Name = "Pop", Type = GenreType.Music},
                new GenreModel {Name = "Football", Type = GenreType.LiveStream},
            }.AsQueryable();

            _mockGenreRepository.Setup(x => x.GetAll()).Returns(genres);

            var liveStreamGenres = _genreService.GetLiveStreamGenres();

            liveStreamGenres.ElementAt(0).Should().Be(genres.ElementAt(1));
            liveStreamGenres.Count.Should().Be(1);
        }
    }
}
