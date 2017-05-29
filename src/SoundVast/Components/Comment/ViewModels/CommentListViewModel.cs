using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.CustomHelpers;

namespace SoundVast.Components.Comment.ViewModels
{
    public class CommentListViewModel
    {
        public int AudioId { get; }
        public string CommentCount { get; set; }
        public CreateCommentViewModel CreateCommentViewModel { get; set; }

        [Obsolete("For model binding only", true)]
        public CommentListViewModel()
        {

        }

        public CommentListViewModel(int audioId, int commentCount)
        {
            AudioId = audioId;
            CommentCount = commentCount.SingularOrPlural("comment", false);
        }
    }

}
