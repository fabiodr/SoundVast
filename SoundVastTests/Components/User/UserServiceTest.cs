//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using FluentAssertions;
//using Moq;
//using NUnit.Framework;
//using SoundVast.Components.Audio.Models;
//using SoundVast.Components.User;
//using SoundVast.Repository;

//namespace SoundVastTests.Components.User
//{
//    [TestFixture]
//    public class UserServiceTest
//    {
//        private UserService _userService;
//        private Mock<IRepository<SongModel>> _mockAudioRepository;

//        [SetUp]
//        public void Init()
//        {
//            _mockAudioRepository = new Mock<IRepository<SongModel>>();

//            _userService = new UserService(_mockAudioRepository.Object);
//        }

//        [Test]
//        public void GetsAllUploadsForUser()
//        {
//            const string userId = "DWPER-23121D-EDADA";

//            var audioModels = new List<SongModel>
//            {
//                new SongModel { UserId = userId },
//                new SongModel { UserId = userId },
//                new SongModel { UserId = "XXFDD-DFGEDE-XFFFF" }
//            }.AsQueryable();

//            _mockAudioRepository.Setup(x => x.GetAll()).Returns(audioModels);

//            var userAudios = _userService.GetUploadsForUser(userId);

//            userAudios.Count.Should().Be(2);
//            userAudios.All(x => x.UserId == userId).Should().Be(true);
//        }
//    }
//}
