using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Comment
{
    public interface ICommentService
    {
        ICollection<Models.Comment> TopLevelComments(int audioId);
        ICollection<Models.Comment> GetReplies(int id);
        void Add(Models.Comment comment);
        void Edit(Models.Comment existingComment, string body);
        void Delete(Models.Comment existingComment);
    }
}
