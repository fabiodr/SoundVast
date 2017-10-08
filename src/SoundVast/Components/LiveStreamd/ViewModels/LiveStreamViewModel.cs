using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;

namespace SoundVast.Components.LiveStream.ViewModels
{
    public class LiveStreamViewModel : AudioViewModel
    {
        public string WebsiteUrl { get; set; }
        public string AudioUrl { get; set; }
    }
}
