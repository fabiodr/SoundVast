

namespace SoundVastTests.Services
{
    //public class CommentServiceTest
    //{
    //    private readonly Mock<IRepository<Comment>> _mockRepository;
    //    private readonly ICommentService _service;

    //    public CommentServiceTest()
    //    {
    //        var modelState = new ModelStateDictionary();
    //        _mockRepository = new Mock<IRepository<Comment>>();
    //        _service = new CommentService(new ModelStateWrapper(modelState), _mockRepository.Object);
    //    }

    //    [Fact]
    //    public void Add()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Audio = new Audio()
    //        };

    //        _mockRepository.Setup(x => x.Add(It.IsAny<Comment>()));

    //        var result = _service.Add(comment);

    //        Assert.True(result);
    //    }

    //    [Fact]
    //    public void CommentCountIncrementedOnAdd()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Audio = new Audio()
    //        };

    //        var originalCommentCount = comment.Audio.CommentCount;
    //        _service.Add(comment);
    //        var newCommentCount = comment.Audio.CommentCount;

    //        Assert.Equal(originalCommentCount + (int)RatingValue.Increment, newCommentCount);
    //    }

    //    [Fact]
    //    public void Edit()
    //    {
    //        var comment = new Comment("BodyText");
    //        var user = new ApplicationUser()
    //        {
    //            Email = "test123@gmail.com",
    //            PhoneNumber = "07456313767",
    //            Username = "TestUserName"
    //        };

    //        var result = _service.Edit(comment, "[Deleted]", user);

    //        Assert.True(result);
    //    }

    //    [Fact]
    //    public void Delete()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Audio = new Audio()
    //        };

    //        _mockRepository.Setup(x => x.Remove(It.IsAny<Comment>()));

    //        _service.Delete(comment);

    //        _mockRepository.Verify(x => x.Remove(comment), Times.Once);
    //    }

    //    [Fact]
    //    public void CommentCountDecrementedOnDelete()
    //    {
    //        var comment = new Comment("BodyText")
    //        {
    //            Audio = new Audio()
    //        };

    //        var originalCommentCount = comment.Audio.CommentCount;
    //        _service.Delete(comment);
    //        var newCommentCount = comment.Audio.CommentCount;

    //        Assert.Equal(originalCommentCount - (int)RatingValue.Increment, newCommentCount);
    //    }
   // }
}
