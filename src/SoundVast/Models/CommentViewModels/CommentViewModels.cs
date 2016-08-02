using ExpressiveAnnotations.Attributes;
using SoundVast.CustomHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SoundVast.Models.CommentViewModels
{
    public class JsonModel
    {
        public string HtmlString { get; set; }
        public bool NoMoreData { get; set; }
    }

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
            get { return _originalSongUserName; }
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

    public class CreateCommentViewModel
    {
        public int Id { get; set; }

        [Required]
        public int AudioId { get; set; }

        [Required]
        [StringLength(300)]
        public string Body { get; set; }
    }

    public class ReplyCommentViewModel
    {
        public int Id { get; set; }

        [Required]
        public int OriginalCommentId { get; set; }

        [Required]
        public string Body { get; set; }
    }


    public class ReportCommentViewModel
    {
        public int Id { get; set; }
        public string Reason { get; set; }

        [RequiredIf("Reason == 'Other'", ErrorMessage = @"Additional details must be entered")]
        public string AdditionalDetails { get; set; }
    }

    public class EditCommentViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Body { get; set; }
    }

    public class CommentBodyViewModel
    {
        public string Body { get; set; }
    }
}