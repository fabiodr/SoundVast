//using AutoMapper;
//using Microsoft.AspNetCore.Mvc;
//using SoundVast.QueryOptions;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using SoundVast.Components.Comment;
//using SoundVast.Components.Comment.Models;
//using SoundVast.Components.Comment.ViewModels;

//namespace SoundVast.ViewComponents
//{
//    public class TopRatedViewComponent : ViewComponent
//    {
//        private readonly IMapper _mapper;
//        private readonly ICommentService _commentService;

//        public TopRatedViewComponent(IMapper mapper, ICommentService commentService)
//        {
//            _mapper = mapper;
//            _commentService = commentService;
//        }

//        public IViewComponentResult Invoke(int audioId, bool sortDescending, int pageNumber = 1)
//        {
//            var comments = _commentService.GetSortedCommentsForAudio(audioId, pageNumber, new OrderingOption<Comment, int>(x => x.RatingCount.Likes, sortDescending));
//            var commentViewModels = _mapper.Map<IEnumerable<CommentViewModel>>(comments);

//            return View(commentViewModels);
//        }
//    }
//}
