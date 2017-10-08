using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;

namespace SoundVast.Components.LiveStream.ViewModels
{
    public class LiveStreamsViewModel : AudiosViewModel
    {
        public string AudioUrl { get; set; }
        public string Image { get; set; }
    }
}
