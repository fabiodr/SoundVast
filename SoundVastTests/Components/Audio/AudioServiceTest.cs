using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Repository;

namespace SoundVastTests.Components.Audio
{
    [TestFixture]
    public class AudioServiceTest
    {
        private AudioService _audioService;
        private Mock<IRepository<AudioModel>> _mockAudioRepository;
        private const int AudioId = 3;
        private const string UserId = "DLEPR-DPELF";

        [SetUp]
        public void Init()
        {
            _mockAudioRepository = new Mock<IRepository<AudioModel>>();

            _audioService = new AudioService(_mockAudioRepository.Object);
        }

        [Test]
        public void GetSongs()
        {
            const int current = 1;
            const int amount = 2;
            var songs = new List<AudioModel>
            {
                new AudioModel { Name="podcast.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Audio) }},
                new AudioModel { Name="bubble01.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Song) }},
                new AudioModel { Name="bubble02.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Song) }},
                new AudioModel { Name="bubble03.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Song) }},
                new AudioModel { Name="bubble04.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Song) }}
            }.AsQueryable();

            _mockAudioRepository.Setup(x => x.GetAll()).Returns(songs);

            var result = _audioService.GetSongs(current, amount);

            result.Count.Should().Be(2);
            result.All(x => x.Genre.GenreType == nameof(GenreType.Song)).Should().Be(true);
            result.ElementAt(0).Name.Should().Be("bubble02.mp3");
        }

        [Test]
        public void GetAudio()
        {
            var audio = new AudioModel
            {
                Name = "bubble01.mp3",
            };

            _mockAudioRepository.Setup(x => x.Get(AudioId)).Returns(audio);

            var result = _audioService.GetAudio(AudioId);

            result.Should().Be(audio);
        }

        [Test]
        public void RateAudio_AddsRatingToAudio()
        {
            var audio = new AudioModel
            {
                Id = AudioId,
                Name = "bubble01.mp3",
                Rating = new List<RatingModel>()
            };

            var audioModels = new List<AudioModel>
            {
                audio
            }.AsQueryable();

            _mockAudioRepository.Setup(x => x.Include(r => r.Rating)).Returns(audioModels);

            _audioService.RateAudio(AudioId, true, UserId);

            audio.Rating.ElementAt(0).Liked.Should().Be(true);
            audio.Rating.ElementAt(0).UserId.Should().Be(UserId);
            audio.Rating.ElementAt(0).AudioId.Should().Be(AudioId);
        }

        [Test]
        public void RateAudio_ChangesExistingRatingIfItExists()
        {
            var audio = new AudioModel
            {
                Id = AudioId,
                Name = "bubble01.mp3",
                Rating = new List<RatingModel>
                {
                    new RatingModel
                    {
                        UserId = UserId,
                        Liked = false
                    }
                }
            };

            var audioModels = new List<AudioModel>
            {
                audio
            }.AsQueryable();

            _mockAudioRepository.Setup(x => x.Include(r => r.Rating)).Returns(audioModels);

            _audioService.RateAudio(AudioId, true, UserId);

            audio.Rating.ElementAt(0).Liked.Should().Be(true);
        }
    }
}
