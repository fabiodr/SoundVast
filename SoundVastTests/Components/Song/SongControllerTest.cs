﻿using System.Collections.Generic;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Storage.CloudStorage;
using SoundVast.Utilities;

namespace SoundVastTests.Components.Song
{
    [TestFixture]
    public class SongControllerTest
    {
        private SongController _songController;
        private Mock<IAudioService> _mockAudioService;
        private Mock<ICloudStorage> _mockCloudStorage;

        [SetUp]
        public void Init()
        {
            _mockAudioService = new Mock<IAudioService>();
            _mockCloudStorage = new Mock<ICloudStorage>();

            _songController = new SongController(_mockAudioService.Object, _mockCloudStorage.Object);
        }

        [Test]
        public void FetchesSongs()
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
        public void FetchesSong()
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

        [Test]
        public void Stream()
        {
            var song = new AudioModel
            {
                Name = "test"
            };

            _songController.ControllerContext.HttpContext = new DefaultHttpContext();

            _mockAudioService.Setup(x => x.GetSong(It.IsAny<int>())).Returns(song);
            _mockCloudStorage.Setup(x => x.GetBlob(CloudStorageType.Audio, song.Name));

            var result = _songController.Stream(22);

            _mockAudioService.VerifyAll();
            _mockCloudStorage.VerifyAll();

            var responseHeaders = _songController.ControllerContext.HttpContext.Response.Headers;

            responseHeaders.ContainsKey("Content-Disposition").Should().BeTrue();

            result.Should().BeOfType<Stream>();
        }
    }
}