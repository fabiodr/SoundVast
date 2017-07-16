using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Moq;
using SoundVast.Repository;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SoundVast.Components;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Comment;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.User;

namespace SoundVastTests.Services
{
    //public class CommentServiceTest
    //{
    //    private readonly Mock<IRepository<CommentModel>> _mockRepository;
    //    private readonly ICommentService _service;

    //    public CommentServiceTest()
    //    {
    //        var modelState = new ModelStateDictionary();
    //        _mockRepository = new Mock<IRepository<CommentModel>>();
    //        _service = new CommentService(new ModelStateWrapper(modelState), _mockRepository.Object);
    //    }

    //    [Fact]
    //    public void Add()
    //    {
    //        var comment = new CommentModel("BodyText")
    //        {
    //            Audio = new AudioModel()
    //        };

    //        _mockRepository.Setup(x => x.Add(It.IsAny<CommentModel>()));

    //        var result = _service.Add(comment);

    //        Assert.True(result);
    //    }

    //    [Fact]
    //    public void CommentCountIncrementedOnAdd()
    //    {
    //        var comment = new CommentModel("BodyText")
    //        {
    //            Audio = new AudioModel()
    //        };

    //        var originalCommentCount = comment.Audio.CommentCount;
    //        _service.Add(comment);
    //        var newCommentCount = comment.Audio.CommentCount;

    //        Assert.Equal(originalCommentCount + (int)RatingValue.Increment, newCommentCount);
    //    }

    //    [Fact]
    //    public void Edit()
    //    {
    //        var comment = new CommentModel("BodyText");
    //        var user = new ApplicationUser()
    //        {
    //            Email = "test123@gmail.com",
    //            PhoneNumber = "07456313767",
    //            UserName = "TestUserName"
    //        };

    //        var result = _service.Edit(comment, "[Deleted]", user);

    //        Assert.True(result);
    //    }

    //    [Fact]
    //    public void Delete()
    //    {
    //        var comment = new CommentModel("BodyText")
    //        {
    //            Audio = new AudioModel()
    //        };

    //        _mockRepository.Setup(x => x.Remove(It.IsAny<CommentModel>()));

    //        _service.Delete(comment);

    //        _mockRepository.Verify(x => x.Remove(comment), Times.Once);
    //    }

    //    [Fact]
    //    public void CommentCountDecrementedOnDelete()
    //    {
    //        var comment = new CommentModel("BodyText")
    //        {
    //            Audio = new AudioModel()
    //        };

    //        var originalCommentCount = comment.Audio.CommentCount;
    //        _service.Delete(comment);
    //        var newCommentCount = comment.Audio.CommentCount;

    //        Assert.Equal(originalCommentCount - (int)RatingValue.Increment, newCommentCount);
    //    }
   // }
}
