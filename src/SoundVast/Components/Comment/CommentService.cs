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

namespace SoundVast.Components.Comment
{
    public interface ICommentService
    {
        CommentModel GetComment(int id);
        CommentModel GetCommentForRating(int id);
        CommentModel GetCommentForDelete(int id);
        CommentModel GetOriginalComment(int id);
        ICollection<CommentModel> GetCommentsForAudio(int audioId, int pageNumber, int commentsPerPage);
        ICollection<CommentModel> GetSortedCommentsForAudio<TKey>(int audioId, int pageNumber, OrderingOption<CommentModel, TKey> orderingOption);
        ICollection<CommentModel> GetReplies(int id);
        bool Add(CommentModel comment);
        bool Edit(CommentModel comment, string body, ApplicationUser user);
        bool Delete(CommentModel comment);
    }

    public class CommentService : ICommentService
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<CommentModel> _repository;

        public CommentService(IValidationDictionary validationDictionary, IRepository<CommentModel> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        private bool Validate(CommentModel comment)
        {
            return _validationDictionary.IsValid;
        }

        public CommentModel GetComment(int id)
        {
            return _repository.Get(id);
        }

        public CommentModel GetCommentForRating(int id)
        {
            return _repository.GetAll()
                .Include(x => x.CommentRatingJoins)
                .ThenInclude(x => x.CommentRating)
                .Include(x => x.User)
                .Include(x => x.RatingCount)
                .SingleOrDefault(x => x.Id == id);
        }

        public CommentModel GetCommentForDelete(int id)
        {
            return _repository.GetAll()
                .Include(x => x.Audio)
                .Include(x => x.Replies)
                .Include(x => x.User)
                .SingleOrDefault(x => x.Id == id);
        }

        public CommentModel GetOriginalComment(int id)
        {
            return _repository.GetAll()
                .Include(x => x.Replies)
                .Include(x => x.Audio)
                .SingleOrDefault(x => x.Id == id);
        }

        public ICollection<CommentModel> GetCommentsForAudio(int audioId, int pageNumber, int commentsPerPage)
        {
            var startIndex = (pageNumber - 1) * commentsPerPage;
            return _repository.GetAll().ToList();
            //     return _repository.GetAll().ForAudio(audioId).Where(x => x.OriginalComment == null).Skip(startIndex).Take(commentsPerPage).ToList();
        }

        public ICollection<CommentModel> GetSortedCommentsForAudio<TKey>(int audioId, int pageNumber, OrderingOption<CommentModel, TKey> orderingOption)
        {
            var startIndex = (pageNumber - 1) * CommentModel.CommentsPerPage;
            var comments = _repository.GetAll().Include(x => x.User).Include(x => x.Replies).ForAudio(audioId)
                .Where(x => x.OriginalComment == null).WithOrdering(orderingOption);

            foreach (var comment in comments)
            {
                comment.Replies = comment.Replies.Take(CommentModel.RepliesToLoadInitially).ToList();
            }

            return comments.Skip(startIndex).Take(CommentModel.CommentsPerPage).ToList();
        }

        public ICollection<CommentModel> GetReplies(int id)
        {
            return _repository.GetAll().Where(x => x.Id == id).SelectMany(x => x.Replies).WithOrdering(new OrderingOption<CommentModel, DateTime>(x => x.Date))
                .Skip(CommentModel.RepliesToLoadInitially).ToList();
        }

        private static void ModifyComment(CommentModel comment, RatingValue value)
        {
            comment.Audio.ModifyComment(value);
        }

        public bool Add(CommentModel comment)
        {
            if (!Validate(comment))
                return false;

            ModifyComment(comment, RatingValue.Increment);
            _repository.Add(comment);

            return true;
        }

        public bool Edit(CommentModel comment, string body, ApplicationUser user)
        {
            comment.Body = body;

            comment.UserId = null;
            if (!Validate(comment))
                return false;

            _repository.Save();

            return true;
        }

        public bool Delete(CommentModel comment)
        {
            if (!Validate(comment))
                return false;

            ModifyComment(comment, RatingValue.Decrement);
            _repository.Remove(comment);

            return true;
        }
    }
}