using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Comment
{
    public interface ICommentService
    {
        Models.Comment Get(int id);
        IEnumerable<Models.Comment> GetComments();
        void Add(Models.Comment comment);
        void Edit(Models.Comment existingComment, string body);
        void Delete(Models.Comment existingComment);
        Rating.Models.Rating Rate(int commentId, string userId, bool liked);
    }
}
