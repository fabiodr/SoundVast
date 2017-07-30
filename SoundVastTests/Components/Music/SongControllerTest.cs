using System.Collections.Generic;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;

namespace SoundVastTests.Components.Music
{
    [TestFixture]
    public class SongControllerTest
    {
        private SongController _songController;
        private Mock<IAudioService> _mockAudioService;

        [SetUp]
        public void Init()
        {
            _mockAudioService = new Mock<IAudioService>();

            _songController = new SongController(_mockAudioService.Object);
        }

        [Test]
        public void GetsSongs()
        {
            var songs = new List<AudioModel>
            {
                new AudioModel(),
                new AudioModel()
            };

            _mockAudioService.Setup(x => x.GetSongs(It.IsAny<int>(), It.IsAny<int>())).Returns(songs);

            var result = (OkObjectResult)_songController.FetchSongs(new FetchSongsModel());

            result.Value.ShouldBeEquivalentTo(new
            {
                songs,
                hasMore = true
            });
        }

        [Test]
        public void GetsSong()
        {
            var model = new FetchSongModel
            {
                Id = 1,
            };
            var song = new AudioModel();

            _mockAudioService.Setup(x => x.GetSong(model.Id)).Returns(song);

            var result = (OkObjectResult)_songController.FetchSong(model);

            result.Value.ShouldBeEquivalentTo(new
            {
                song
            });
        }
    }
}
