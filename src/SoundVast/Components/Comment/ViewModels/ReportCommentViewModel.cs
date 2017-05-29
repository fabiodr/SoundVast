using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpressiveAnnotations.Attributes;

namespace SoundVast.Components.Comment.ViewModels
{
    public class ReportCommentViewModel
    {
        public int Id { get; set; }
        public string Reason { get; set; }

        [RequiredIf("Reason == 'Other'", ErrorMessage = @"Additional details must be entered")]
        public string AdditionalDetails { get; set; }
    }
}
