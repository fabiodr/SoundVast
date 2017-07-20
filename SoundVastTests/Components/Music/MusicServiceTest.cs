using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Music;
using SoundVast.Components.User;
using SoundVast.Repository;

namespace SoundVastTests.Components.Music
{
    [TestFixture]
    public class MusicServiceTest
    {
        private MusicService _musicService;
        private Mock<IRepository<AudioModel>> _mockAudioRepository;

        [SetUp]
        public void Init()
        {
            _mockAudioRepository = new Mock<IRepository<AudioModel>>();

            _musicService = new MusicService(_mockAudioRepository.Object);
        }

        [Test]
        public void GetMusic()
        {
            var musicAudios = new List<AudioModel>
            {
                new AudioModel { Name="bubble.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Music) }},
                new AudioModel { Name="podcast.mp3", Genre = new GenreModel { GenreType = nameof(GenreType.Audio) }},
            }.AsQueryable();

            _mockAudioRepository.Setup(x => x.GetAll()).Returns(musicAudios);

            var result = _musicService.GetMusic();

            result.Count.Should().Be(1);
            result.ElementAt(0).Name.Should().Be("bubble.mp3");
        }
    }
}
