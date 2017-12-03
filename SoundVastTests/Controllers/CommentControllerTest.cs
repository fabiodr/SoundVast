

namespace SoundVastTests.Controllers
{
    //public class CommentControllerTest
    //{
    //    private readonly Mock<ICommentService> _service;
    //    private readonly Mock<IAudioService<Audio>> _audioService;
    //    private readonly Mock<IRatingService<CommentRatingModel>> _ratingService;
    //    private readonly Mock<IReportService<CommentReportModel>> _reportService;
    //    private readonly Mock<IServiceProvider> _serviceProvider;
    //    private readonly IMapper _mapper;
    //    private readonly CommentController _commentController;

    //    public CommentControllerTest()
    //    {
    //        var cloudStorage = new Mock<ICloudStorage>();
    //        var autoMapper = new AutoMapperConfiguration(cloudStorage.Object);
    //        var userStore = new Mock<IUserStore<ApplicationUser>>();
    //        var userManager = new UserManager<ApplicationUser>(userStore.Object, null, null, null, null, null, null, null, null);

    //        _service = new Mock<ICommentService>();
    //        _audioService = new Mock<IAudioService<Audio>>();
    //        _ratingService = new Mock<IRatingService<CommentRatingModel>>();
    //        _reportService = new Mock<IReportService<CommentReportModel>>();
    //        _serviceProvider = new Mock<IServiceProvider>();
    //        _mapper = AutoMapperConfiguration.Config.CreateMapper();
    //        _commentController = new CommentController(_mapper, _serviceProvider.Object, _service.Object, _audioService.Object, _ratingService.Object,
    //            _reportService.Object, userManager);
    //    }

    //    [Fact]
    //    public void DeleteEditsInsteadWhenRepliesNotEmpty()
    //    {
    //        _service.Setup(x => x.GetCommentForDelete(It.IsAny<int>())).Returns(new Comment("BodyText")
    //        {
    //            Replies = new List<Comment>() { new Comment("Reply1") }
    //        });

    //        _commentController.Delete(It.IsAny<int>());

    //        _service.Verify(x => x.Edit(It.IsAny<Comment>(), "[Deleted]", null), Times.Once);
    //    }

    //    [Fact]
    //    public void DeleteWithRepliesReturnsReplyPartial()
    //    {
    //        _service.Setup(x => x.GetCommentForDelete(It.IsAny<int>())).Returns(new Comment("BodyText")
    //        {
    //            Replies = new List<Comment>() { new Comment("Reply1") }
    //        });

    //        var result = _commentController.Delete(It.IsAny<int>());
    //        var partialViewResult = result as PartialViewResult;

    //        Assert.IsType<PartialViewResult>(result);
    //        Assert.Equal("DisplayTemplates/CommentViewModel", partialViewResult.ViewName);
    //    }

    //    [Fact]
    //    public void DeleteReturnsEmptyPartial()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Replies = Enumerable.Empty<Comment>().ToList()
    //        };

    //        _service.Setup(x => x.GetCommentForDelete(It.IsAny<int>())).Returns(comment);

    //        var result = _commentController.Delete(It.IsAny<int>()) as EmptyResult;

    //        Assert.IsType<EmptyResult>(result);
    //    }

    //    [Fact]
    //    public void DeletesWhenNoReplies()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Replies = Enumerable.Empty<Comment>().ToList()
    //        };

    //        _service.Setup(x => x.GetCommentForDelete(It.IsAny<int>())).Returns(comment);

    //        _commentController.Delete(It.IsAny<int>());

    //        _service.Verify(x => x.Delete(It.IsAny<Comment>()), Times.Once);
    //    }
    //}
}
