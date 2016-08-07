using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using SoundVast.ServiceLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Models.CommentViewModels;

namespace SoundVast.ViewComponents
{
    public class TopRatedViewComponent : ViewComponent
    {
        private readonly IMapper _mapper;
        private readonly ICommentService _commentService;

        public TopRatedViewComponent(IMapper mapper, ICommentService commentService)
        {
            _mapper = mapper;
            _commentService = commentService;
        }

        public IViewComponentResult Invoke(int audioId, bool sortDescending, int pageNumber = 1)
        {
            var comments = _commentService.GetSortedCommentsForAudio(audioId, pageNumber, new OrderingOption<Comment, int>(x => x.RatingCount.Likes, sortDescending));
            var commentViewModels = _mapper.Map<IEnumerable<CommentViewModel>>(comments);

            return View(commentViewModels);
        }
    }
}
