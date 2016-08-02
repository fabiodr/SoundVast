using Microsoft.AspNetCore.Mvc;
using Moq;
using SoundVast.Controllers;
using SoundVast.CustomHelpers;
using SoundVast.Models.CommentModels;
using SoundVast.Models.IdentityModels;
using SoundVast.ServiceLayer;
using SoundVast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using SoundVast.Models;

namespace SoundVastTests.Controllers
{
    public class CommentControllerTest
    {
        private readonly Mock<ICommentService> _service;
        private readonly Mock<IAudioService<Audio>> _audioService;
        private readonly Mock<IRatingService<CommentRating>> _ratingService;
        private readonly Mock<IReportService<CommentReport>> _reportService;
        private readonly Mock<IServiceProvider> _serviceProvider;
        private readonly IMapper _mapper;
        private readonly CommentController _commentController;

        public CommentControllerTest()
        {
            var azureConfig = new Mock<IAzureConfig>();
            var autoMapper = new AutoMapperConfiguration(azureConfig.Object);
            var userManager = new Mock<UserManager<ApplicationUser>>();

            _service = new Mock<ICommentService>();
            _audioService = new Mock<IAudioService<Audio>>();
            _ratingService = new Mock<IRatingService<CommentRating>>();
            _reportService = new Mock<IReportService<CommentReport>>();
            _serviceProvider = new Mock<IServiceProvider>();
            _mapper = AutoMapperConfiguration.Config.CreateMapper();
            _commentController = new CommentController(_mapper, _serviceProvider.Object, _service.Object, _audioService.Object, _ratingService.Object,
                _reportService.Object, userManager.Object);
        }

        [Fact]
        public void DeleteEditsInsteadWhenRepliesNotEmpty()
        {
            _service.Setup(x => x.GetComment(It.IsAny<int>())).Returns(new Comment("BodyText")
            {
                Replies = new List<Comment>() { new Comment("Reply1") }
            });

            _commentController.Delete(It.IsAny<int>());

            _service.Verify(x => x.Edit(It.IsAny<Comment>(), "[Deleted]", null), Times.Once);
        }

        [Fact]
        public void DeleteWithRepliesReturnsReplyPartial()
        {
            _service.Setup(x => x.GetComment(It.IsAny<int>())).Returns(new Comment("BodyText")
            {
                Replies = new List<Comment>() { new Comment("Reply1") }
            });

            var result = _commentController.Delete(It.IsAny<int>());
            var partialViewResult = result as PartialViewResult;

            Assert.IsType<PartialViewResult>(result);
            Assert.Equal("DisplayTemplates/CommentViewModel", partialViewResult.ViewName);
        }

        [Fact]
        public void DeleteReturnsEmptyPartial()
        {
            var comment = new Comment("BodyText")
            {
                Replies = Enumerable.Empty<Comment>().ToList()
            };

            _service.Setup(x => x.GetComment(It.IsAny<int>())).Returns(comment);

            var result = _commentController.Delete(It.IsAny<int>()) as EmptyResult;

            Assert.IsType<EmptyResult>(result);
        }

        [Fact]
        public void DeletesWhenNoReplies()
        {
            var comment = new Comment("BodyText")
            {
                Replies = Enumerable.Empty<Comment>().ToList()
            };

            _service.Setup(x => x.GetComment(It.IsAny<int>())).Returns(comment);

            _commentController.Delete(It.IsAny<int>());

            _service.Verify(x => x.Delete(It.IsAny<Comment>()), Times.Once);
        }
    }
}
