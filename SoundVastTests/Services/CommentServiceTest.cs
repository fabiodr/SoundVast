using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Moq;
using SoundVast.Repository;
using SoundVast.Models.IdentityModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SoundVast.ServiceLayer;

namespace SoundVastTests
{
    public class CommentServiceTest
    {
        private Mock<IRepository<Comment>> _mockRepository;
        private ICommentService _service;
        private ModelStateDictionary _modelState;

        public CommentServiceTest()
        {
            _modelState = new ModelStateDictionary();
            _mockRepository = new Mock<IRepository<Comment>>();
            _service = new CommentService(new ModelStateWrapper(_modelState), _mockRepository.Object);
        }

        [Fact]
        public void Add()
        {
            var comment = new Comment("BodyText")
            {
                Audio = new Audio()
            };

            _mockRepository.Setup(x => x.Add(It.IsAny<Comment>()));

            var result = _service.Add(comment);

            Assert.True(result);
        }

        [Fact]
        public void CommentCountIncrementedOnAdd()
        {
            var comment = new Comment("BodyText")
            {
                Audio = new Audio()
            };

            var originalCommentCount = comment.Audio.CommentCount;
            var result = _service.Add(comment);
            var newCommentCount = comment.Audio.CommentCount;

            Assert.Equal(originalCommentCount + (int)RatingValue.Increment, newCommentCount);
        }

        [Fact]
        public void Edit()
        {
            var comment = new Comment("BodyText");
            var user = new SoundVast.Models.ApplicationUser()
            {
                Email = "test123@gmail.com",
                PhoneNumber = "07456313767",
                UserName = "TestUserName"
            };

            var result = _service.Edit(comment, "[Deleted]", user);

            Assert.True(result);
        }

        [Fact]
        public void Delete()
        {
            var comment = new Comment("BodyText")
            {
                Audio = new Audio()
            };

            _mockRepository.Setup(x => x.Remove(It.IsAny<Comment>()));

            _service.Delete(comment);

            _mockRepository.Verify(x => x.Remove(comment), Times.Once);
        }

        [Fact]
        public void CommentCountDecrementedOnDelete()
        {
            var comment = new Comment("BodyText")
            {
                Audio = new Audio()
            };

            var originalCommentCount = comment.Audio.CommentCount;
            _service.Delete(comment);
            var newCommentCount = comment.Audio.CommentCount;

            Assert.Equal(originalCommentCount - (int)RatingValue.Increment, newCommentCount);
        }
    }
}
