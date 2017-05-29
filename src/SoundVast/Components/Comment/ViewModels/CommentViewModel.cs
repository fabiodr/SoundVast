using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.CustomHelpers;

namespace SoundVast.Components.Comment.ViewModels
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public int AudioId { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string UserImage { get; set; }
        public string Body { get; set; }
        public DateTime Date { get; set; }
        public string DateSince => DateTime.Now.Subtract(Date).FormatTime();
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public int OriginalCommentId { get; set; }

        private string _originalSongUserName;
        public string OriginalCommentUserName
        {
            get => _originalSongUserName;
            set
            {
                if (value != null)
                {
                    _originalSongUserName = "@" + value;
                }
            }
        }

        public IEnumerable<CommentViewModel> ReplyViewModels { get; set; }
    }
}
