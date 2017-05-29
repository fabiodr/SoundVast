using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Report.Models;

namespace SoundVast.Components.Comment.Models
{
    public class CommentReportModel : ReportModel
    {
        public virtual CommentModel Comment { get; set; }
    }
}
