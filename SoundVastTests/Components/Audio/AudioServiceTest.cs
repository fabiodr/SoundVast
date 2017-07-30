using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Repository;

namespace SoundVastTests.Components.Audio
{
    [TestFixture]
    public class AudioServiceTest
    {
        private AudioService _audioService;
        private Mock<IRepository<AudioModel>> _mockAudioRepository;

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
        public void GetSong()
        {
            const int songId = 3;
            var song = new AudioModel
            {
                Name = "bubble01.mp3",
                Genre = new GenreModel
                {
                    GenreType = nameof(GenreType.Song)
                },
            };

            _mockAudioRepository.Setup(x => x.Get(songId)).Returns(song);

            var result = _audioService.GetSong(songId);

            result.Should().Be(song);
        }
    }
}
