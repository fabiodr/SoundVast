using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
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

        public Models.Comment Get(int id)
        {
            return _repository.GetAll().BuildComment().Single(x => x.Id == id);
        }

        public void Add(Models.Comment comment)
        {
            _validationProvider.Validate(comment);

            if (!_validationProvider.HasErrors)
            {
                if (comment.OriginalCommentId.HasValue)
                {
                    var originalComment = _repository.GetAll().BuildComment()
                        .Single(x => x.Id == comment.OriginalCommentId.Value);

                    originalComment.Replies.Add(comment);
                }

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

        public Rating.Models.Rating Rate(int commentId, string userId, bool liked)
        {
            var rating = _repository.GetAll().Rate(commentId, userId, liked);

            _repository.Save();

            return rating;
        }
    }
}