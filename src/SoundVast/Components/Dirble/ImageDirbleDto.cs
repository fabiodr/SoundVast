using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Dirble
{
    public class ThumbDirbleDto
    {
        public string Url { get; set; }
    }

    public class ImageDirbleDto
    {
        public string Url { get; set; }
        public ThumbDirbleDto Thumb { get; set; }
    }
}
