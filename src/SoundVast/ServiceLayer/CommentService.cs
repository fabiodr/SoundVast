using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Filters;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using SoundVast.Repository;
using Microsoft.EntityFrameworkCore;
using SoundVast.Models;
using System.Linq.Expressions;
using SoundVast.CustomHelpers;

namespace SoundVast.ServiceLayer
{
    public interface ICommentService
    {
        Comment GetComment(int id);
        Comment GetCommentForRating(int id);
        Comment GetCommentForDelete(int id);
        Comment GetOriginalComment(int id);
        ICollection<Comment> GetCommentsForAudio(int audioId, int pageNumber, int commentsPerPage);
        ICollection<Comment> GetSortedCommentsForAudio<TKey>(int audioId, int pageNumber, OrderingOption<Comment, TKey> orderingOption);
        ICollection<Comment> GetReplies(int id);
        bool Add(Comment comment);
        bool Edit(Comment comment, string body, ApplicationUser user);
        bool Delete(Comment comment);
    }

    public class CommentService : ICommentService
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<Comment> _repository;

        public CommentService(IValidationDictionary validationDictionary, IRepository<Comment> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        private bool Validate(Comment comment)
        {
            return _validationDictionary.IsValid;
        }

        public Comment GetComment(int id)
        {
            return _repository.Get(id);
        }

        public Comment GetCommentForRating(int id)
        {
            return _repository.GetAll()
                .Include(x => x.CommentRatingJoins)
                .ThenInclude(x => x.CommentRating)
                .Include(x => x.User)
                .Include(x => x.Audio)
                .Include(x => x.RatingCount)
                .SingleOrDefault(x => x.Id == id);
        }

        public Comment GetCommentForDelete(int id)
        {
            return _repository.GetAll()
                .Include(x => x.Audio)
                .Include(x => x.Replies)
                .Include(x => x.User)
                .SingleOrDefault(x => x.Id == id);
        }

        public Comment GetOriginalComment(int id)
        {
            return _repository.GetAll()
                .Include(x => x.Replies)
                .Include(x => x.Audio)
                .SingleOrDefault(x => x.Id == id);
        }

        public ICollection<Comment> GetCommentsForAudio(int audioId, int pageNumber, int commentsPerPage)
        {
            var startIndex = (pageNumber - 1) * commentsPerPage;
            return _repository.GetAll().ToList();
            //     return _repository.GetAll().ForAudio(audioId).Where(x => x.OriginalComment == null).Skip(startIndex).Take(commentsPerPage).ToList();
        }

        public ICollection<Comment> GetSortedCommentsForAudio<TKey>(int audioId, int pageNumber, OrderingOption<Comment, TKey> orderingOption)
        {
            var startIndex = (pageNumber - 1) * Comment.CommentsPerPage;
            var comments = _repository.GetAll().Include(x => x.User).Include(x => x.Replies).ForAudio(audioId)
                .Where(x => x.OriginalComment == null).WithOrdering(orderingOption);

            foreach (var comment in comments)
            {
                comment.Replies = comment.Replies.Take(Comment.RepliesToLoadInitially).ToList();
            }

            return comments.Skip(startIndex).Take(Comment.CommentsPerPage).ToList();
        }

        public ICollection<Comment> GetReplies(int id)
        {
            return _repository.GetAll().ForId(id).SelectMany(x => x.Replies).WithOrdering(new OrderingOption<Comment, DateTime>(x => x.Date))
                .Skip(Comment.RepliesToLoadInitially).ToList();
        }

        private static void ModifyComment(Comment comment, RatingValue value)
        {
            comment.Audio.ModifyComment(value);
        }

        public bool Add(Comment comment)
        {
            if (!Validate(comment))
                return false;

            ModifyComment(comment, RatingValue.Increment);
            _repository.Add(comment);

            return true;
        }

        public bool Edit(Comment comment, string body, ApplicationUser user)
        {
            comment.Body = body;

            comment.UserId = null;
            if (!Validate(comment))
                return false;

            _repository.Save();

            return true;
        }

        public bool Delete(Comment comment)
        {
            if (!Validate(comment))
                return false;

            ModifyComment(comment, RatingValue.Decrement);
            _repository.Remove(comment);

            return true;
        }
    }
}