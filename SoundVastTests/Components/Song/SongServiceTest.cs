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
        private Mock<IRepository<SoundVast.Components.Song.Models.Song>> _mockSongRepository;
        private Mock<IValidationProvider> _mockValidationProvider;
        private const string UserId = "DLEPR-DPELF";

        [SetUp]
        public void Init()
        {
            _mockSongRepository = new Mock<IRepository<SoundVast.Components.Song.Models.Song>>();
            _mockValidationProvider = new Mock<IValidationProvider>();

            _songService = new SongService(_mockSongRepository.Object, _mockValidationProvider.Object);
        }

        [Test]
        public void GetSongs()
        {
            const int current = 1;
            const int amount = 2;
            var songs = new List<SoundVast.Components.Song.Models.Song>
            {
                new SoundVast.Components.Song.Models.Song { Name="bubble03.mp3" },
                new SoundVast.Components.Song.Models.Song { Name="bubble04.mp3" }
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.GetAll()).Returns(songs);

            var result = _songService.GetAudios(current, amount);

            result.ElementAt(0).Name.Should().Be("bubble04.mp3");
            result.Count.Should().Be(1);
        }

        [Test]
        public void GetSong()
        {
            const int id = 0;
            var songs = new List<SoundVast.Components.Song.Models.Song>()
            {
                new SoundVast.Components.Song.Models.Song
                {
                    Id = id,
                    Name = "bubble01.mp3",
                    Genre = new SoundVast.Components.Genre.Models.Genre { Name = "pop" }
                },
                new SoundVast.Components.Song.Models.Song {Name = "bubble02.mp3", Id = 2},
            };

            _mockSongRepository.Setup(x => x.GetAll()).Returns(songs.AsQueryable);

            var result = _songService.GetAudio(id);

            result.Should().Be(songs[0]);
        }

        [Test]
        public void RateSong_AddsRatingToSong()
        {
            const int songId = 0;
            var song = new SoundVast.Components.Song.Models.Song
            {
                Id = songId,
                Name = "bubble01.mp3",
                Ratings = new List<SoundVast.Components.Rating.Models.Rating>()
            };

            var songModels = new List<SoundVast.Components.Song.Models.Song>
            {
                song
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.Include(r => r.Ratings)).Returns(songModels);

            var result = _songService.RateAudio(songId, true, UserId);

            song.Ratings.ElementAt(0).Liked.Should().Be(true);
            song.Ratings.ElementAt(0).UserId.Should().Be(UserId);
            song.Ratings.ElementAt(0).AudioId.Should().Be(songId);
            result.Should().BeOfType<SoundVast.Components.Rating.Models.Rating>();
        }

        [Test]
        public void RateSong_ChangesExistingRatingIfItExists()
        {
            const int songId = 0;
            var song = new SoundVast.Components.Song.Models.Song
            {
                Id = songId,
                Name = "bubble01.mp3",
                Ratings = new List<SoundVast.Components.Rating.Models.Rating>
                {
                    new SoundVast.Components.Rating.Models.Rating
                    {
                        UserId = UserId,
                        Liked = false
                    }
                }
            };

            var songModels = new List<SoundVast.Components.Song.Models.Song>
            {
                song
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.Include(r => r.Ratings)).Returns(songModels);

            var result = _songService.RateAudio(songId, true, UserId);

            song.Ratings.ElementAt(0).Liked.Should().Be(true);
            result.Should().BeOfType<SoundVast.Components.Rating.Models.Rating>();
        }

        [Test]
        public void GetSongRatings()
        {
            const int songId = 0;
            var ratings = new List<SoundVast.Components.Rating.Models.Rating>
            {
                new SoundVast.Components.Rating.Models.Rating {
                    Liked = true,
                    AudioId = songId
                }
            };
            var songs = new List<SoundVast.Components.Song.Models.Song>
            {
                new SoundVast.Components.Song.Models.Song { Id = 0, Name="bubble01.mp3", Ratings = ratings },
                new SoundVast.Components.Song.Models.Song { Id = 1, Name="bubble02.mp3" }
            }.AsQueryable();

            _mockSongRepository.Setup(x => x.GetAll()).Returns(songs);

            var result = _songService.GetAudioRatings(songId);

            result.ShouldBeEquivalentTo(ratings);
        }

        [Test]
        public void ShouldAddAudioModelToRepository()
        {
            _mockValidationProvider.Setup(x => x.Validate(It.IsAny<SoundVast.Components.Song.Models.Song>()));
            _mockSongRepository.Setup(x => x.Add(It.IsAny<SoundVast.Components.Song.Models.Song>()));

            _songService.Add(new SoundVast.Components.Song.Models.Song());

            _mockValidationProvider.VerifyAll();
            _mockSongRepository.VerifyAll();
        }
    }
}
