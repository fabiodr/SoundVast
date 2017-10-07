using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;
using SoundVast.Repository;
using SoundVast.Validation;
using System.Threading.Tasks;
using SoundVast.Storage.CloudStorage;

namespace SoundVastTests.Components.Song
{
    [TestFixture]
    public class SongServiceTest
    {
        private SongService _songService;
        private Mock<IRepository<SongModel>> _mockSongRepository;
        private Mock<IValidationProvider> _mockValidationProvider;
        private const string UserId = "DLEPR-DPELF";

        [SetUp]
        public void Init()
        {
            _mockSongRepository = new Mock<IRepository<SongModel>>();
            _mockValidationProvider = new Mock<IValidationProvider>();

            _songService = new SongService(_mockSongRepository.Object, _mockValidationProvider.Object);
        }

        [Test]
        public void GetSongs()
        {
            const int current = 1;
            const int amount = 2;
            var songs = new List<SongModel>
            {
                new SongModel { Name="bubble03.mp3" },
                new SongModel { Name="bubble04.mp3" }
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.GetAll()).Returns(songs);

            var result = _songService.GetAudios(current, amount);

            result.ElementAt(0).Name.Should().Be("bubble04.mp3");
            result.Count.Should().Be(1);
        }

        [Test]
        public void GetSong()
        {
            const int songId = 0;
            var song = new SongModel
            {
                Name = "bubble01.mp3",
            };

            _mockSongRepository.Setup(x => x.Get(songId)).Returns(song);

            var result = _songService.GetAudio(songId);

            result.Should().Be(song);
        }

        [Test]
        public void RateSong_AddsRatingToSong()
        {
            const int songId = 0;
            var song = new SongModel
            {
                Id = songId,
                Name = "bubble01.mp3",
                Ratings = new List<RatingModel>()
            };

            var songModels = new List<SongModel>
            {
                song
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.Include(r => r.Ratings)).Returns(songModels);

            var result = _songService.RateAudio(songId, true, UserId);

            song.Ratings.ElementAt(0).Liked.Should().Be(true);
            song.Ratings.ElementAt(0).UserId.Should().Be(UserId);
            song.Ratings.ElementAt(0).AudioId.Should().Be(songId);
            result.Should().BeOfType<RatingModel>();
        }

        [Test]
        public void RateSong_ChangesExistingRatingIfItExists()
        {
            const int songId = 0;
            var song = new SongModel
            {
                Id = songId,
                Name = "bubble01.mp3",
                Ratings = new List<RatingModel>
                {
                    new RatingModel
                    {
                        UserId = UserId,
                        Liked = false
                    }
                }
            };

            var songModels = new List<SongModel>
            {
                song
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.Include(r => r.Ratings)).Returns(songModels);

            var result = _songService.RateAudio(songId, true, UserId);

            song.Ratings.ElementAt(0).Liked.Should().Be(true);
            result.Should().BeOfType<RatingModel>();
        }

        [Test]
        public void GetSongRatings()
        {
            const int songId = 0;
            var ratings = new List<RatingModel>
            {
                new RatingModel {
                    Liked = true,
                    AudioId = songId
                }
            };
            var songs = new List<SongModel>
            {
                new SongModel { Id = 0, Name="bubble01.mp3", Ratings = ratings },
                new SongModel { Id = 1, Name="bubble02.mp3" }
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.GetAll()).Returns(songs);

            var result = _songService.GetAudioRatings(songId);

            result.ShouldBeEquivalentTo(ratings);
        }

        [Test]
        public void ShouldAddAudioModelToRepository()
        {
            _mockValidationProvider.Setup(x => x.Validate(It.IsAny<SongModel>()));
            _mockSongRepository.Setup(x => x.Add(It.IsAny<SongModel>()));

            _songService.Add(new SongModel());

            _mockValidationProvider.VerifyAll();
            _mockSongRepository.VerifyAll();
        }
    }
}
