using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.QueryOptions;
using SoundVast.Repository;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Validation;

namespace SoundVast.Components.Comment
{
    public class CommentService : ICommentService
    {
        private readonly IValidationProvider _validationProvider;
        private readonly IRepository<Models.Comment> _repository;

        public CommentService(IValidationProvider validationProvider, IRepository<Models.Comment> repository)
        {
            _validationProvider = validationProvider;
            _repository = repository;
        }

        //public ICollection<Comment> GetSortedCommentsForAudio<TKey>(int audioId, int pageNumber, OrderingOption<Comment, TKey> orderingOption)
        //{
        //    var startIndex = (pageNumber - 1) * Comment.CommentsPerPage;
        //    var comments = _repository.GetAll().Include(x => x.User).Include(x => x.Replies).ForAudio(audioId)
        //        .Where(x => x.OriginalComment == null).WithOrdering(orderingOption);

        //    foreach (var comment in comments)
        //    {
        //        comment.Replies = comment.Replies.Take(Comment.RepliesToLoadInitially).ToList();
        //    }

        //    return comments.Skip(startIndex).Take(Comment.CommentsPerPage).ToList();
        //}

        public ICollection<Models.Comment> TopLevelComments(int audioId)
        {
            return _repository.GetAll().BuildComment().Where(x => x.IsTopLevelComment).ToList();
        }

        public ICollection<Models.Comment> GetReplies(int id)
        {
            return _repository.GetAll().Where(x => x.Id == id).SelectMany(x => x.Replies).OrderBy(x => x.Date).ToList();
        }

        public void Add(Models.Comment comment)
        {
            _validationProvider.Validate(comment);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(comment);
            }
        }

        public void Edit(Models.Comment existingComment, string body)
        {
            if (!_validationProvider.HasErrors)
            {
                existingComment.Body = body;

                _repository.Save();
            }
        }

        public void Delete(Models.Comment existingComment)
        {
            if (!_validationProvider.HasErrors)
            {
                _repository.Remove(existingComment);
            }
        }
    }
}