using SoundVast.Controllers;
using SoundVast.ServiceLayer;
using SoundVast.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using System.Net;
using SoundVast.CustomHelpers;
using SoundVast.Filters;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.Extensions.Options;
using SoundVast.Data;
using SoundVast.Models.CommentModels;
using SoundVast.Models.CommentViewModels;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Claims;
using SoundVast.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class CommentController : CustomBaseController
    {
        private readonly ICommentService _commentService;
        private readonly IAudioService<Audio> _audioService;
        private readonly IRatingService<CommentRating> _ratingService;
        private readonly IReportService<CommentReport> _reportService;
        private readonly UserManager<ApplicationUser> _userManager;

        public CommentController(IMapper mapper, IServiceProvider serviceProvider, ICommentService commentService, IAudioService<Audio> audioService,
            IRatingService<CommentRating> ratingService, IReportService<CommentReport> reportService, UserManager<ApplicationUser> userManager) :
            base(mapper, serviceProvider)
        {
            _commentService = commentService;
            _audioService = audioService;
            _ratingService = ratingService;
            _reportService = reportService;
            _userManager = userManager;
        }

        [HttpPost]
        public JsonResult Rate(int id, bool liked)
        {
            var comment = _commentService.GetComment(id, x => x.Rating, x => x.User, x => x.Rating, x => x.Audio);
            var existingRating = comment.Rating;

            var newRating = new CommentRating
            {
                Comment = comment,
                User = comment.User,
                Liked = liked
            };

            _ratingService.Add(comment.Rating, newRating, existingRating, liked);

            var rating = new { /*comment.Rating.Likes, comment.Rating.Dislikes*/ };
            var e = _ratingService.GetRating(newRating.Id, x => x.Comment, x => x.User);
            return Json(rating);
        }

        [HttpPost]
        [AllowAnonymous]
        public PartialViewResult Newest(int audioId, bool sortDescending, int pageNumber = 1)
        {
            var comments = _commentService.GetSortedCommentsForAudio(audioId, pageNumber, new OrderingOption<Comment, DateTime>(x => x.Date, sortDescending));

            var commentViewModels = Mapper.Map<IEnumerable<CommentViewModel>>(comments);

            return PartialView("_Comments", commentViewModels);
        }

        [HttpPost]
        [AllowAnonymous]
        public ViewComponentResult TopRated(int audioId, bool sortDescending, int pageNumber = 1)
        {
            return ViewComponent("TopRated", new { audioId, sortDescending, pageNumber });
        }

        public PartialViewResult Report(int id)
        {
            return PartialView("_Report", new ReportCommentViewModel { Id = id });
        }

        [HttpPost]
        public void Report(ReportCommentViewModel reportCommentViewModel)
        {
            var report = new CommentReport
            {
                Reason = reportCommentViewModel.Reason,
                AdditionalDetails = reportCommentViewModel.AdditionalDetails,
                Comment = _commentService.GetComment(reportCommentViewModel.Id)
            };

            _reportService.Add(report);

            ViewBag.UserMessage = "Thank you for the report, our team of bears will look into it.";
        }

        [AllowAnonymous]
        public PartialViewResult ViewAllReplies(int id)
        {
            return PartialView("_Comments", Mapper.Map<IEnumerable<CommentViewModel>>(_commentService.GetReplies(id)));
        }

        [AllowAnonymous]
        public PartialViewResult CommentsSideBar(int audioId)
        {
            var commentListViewModel = new CommentListViewModel(audioId, _audioService.GetAudio(audioId).CommentCount)
            {
                CreateCommentViewModel = new CreateCommentViewModel { AudioId = audioId },
            };

            return PartialView("_CommentsSideBar", commentListViewModel);
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult InfiniteScroll(int audioId, int pageNumber)
        {
            var comments = Mapper.Map<ICollection<CommentViewModel>>(_commentService.GetCommentsForAudio(audioId, pageNumber, Comment.CommentsPerPage));

            var jsonModel = new JsonModel
            {
                NoMoreData = comments.Count < Comment.CommentsPerPage,
                HtmlString = RenderPartialViewToString("_Comments", comments)
            };
            return Json(jsonModel);
        }

        public PartialViewResult Edit(int id)
        {
            return PartialView("_Edit", new EditCommentViewModel { Id = id, Body = _commentService.GetComment(id).Body });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public PartialViewResult Edit(EditCommentViewModel editCommentViewModel)
        {
            var comment = _commentService.GetComment(editCommentViewModel.Id);

            _commentService.Edit(comment, editCommentViewModel.Body, comment.User);

            var commentBodyViewModel = Mapper.Map<CommentBodyViewModel>(comment);

            return PartialView("_CommentBody", commentBodyViewModel);
        }

        public PartialViewResult Reply(int originalCommentId)
        {
            return PartialView("_Reply", new ReplyCommentViewModel { OriginalCommentId = originalCommentId });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Reply(ReplyCommentViewModel replyCommentViewModel)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            var originalComment = _commentService.GetComment(replyCommentViewModel.OriginalCommentId, x => x.Audio, x => x.Replies);

            //ToDo: Notify the original user about the reply
            var originalUser = originalComment.User;

            var reply = new Comment(replyCommentViewModel.Body)
            {
                Audio = originalComment.Audio,
                OriginalComment = originalComment,
                User = user
            };

            originalComment.Replies.Add(reply);

            if (!_commentService.Add(reply))
            {
                ViewBag.UserMessage = "Something went wrong.";
                return new EmptyResult();
            }

            var commentViewModel = Mapper.Map<CommentViewModel>(reply);

            return PartialView("DisplayTemplates/CommentViewModel", commentViewModel);
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            var comment = _commentService.GetComment(id, x => x.Replies);

            if (!comment.Replies.Any())
            {
                _commentService.Delete(comment);
                return new EmptyResult();
            }

            _commentService.Edit(comment, "[Deleted]", null);

            var commentViewModel = Mapper.Map<CommentViewModel>(comment);

            return PartialView("DisplayTemplates/CommentViewModel", commentViewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<PartialViewResult> CreateComment(CreateCommentViewModel createCommentViewModel)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);

            var comment = new Comment(createCommentViewModel.Body)
            {
                Audio = _audioService.GetAudio(createCommentViewModel.AudioId),
                User = user
            };

            if (!_commentService.Add(comment))
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                ViewData.TemplateInfo.HtmlFieldPrefix = "CreateCommentViewModel";

                return PartialView("EditorTemplates/CreateCommentViewModel", createCommentViewModel);
            }

            var commentViewModel = Mapper.Map<CommentViewModel>(comment);

            return PartialView("DisplayTemplates/CommentViewModel", commentViewModel);
        }
    }
}