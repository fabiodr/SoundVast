using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Comment.ViewModels
{
    public class ReplyCommentViewModel
    {
        public int Id { get; set; }

        [Required]
        public int OriginalCommentId { get; set; }

        [Required]
        public string Body { get; set; }
    }
}
