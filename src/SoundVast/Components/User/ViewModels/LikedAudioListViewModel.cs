using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.User.ViewModels
{
    public class LikedAudioListViewModel
    {
        public ICollection<LikedFileStreamViewModel> LikedFileStreamViewModels { get; set; }
        public ICollection<LikedPlaylistViewModel> LikedPlaylistViewModels { get; set; }
        public ICollection<LikedLiveStreamViewModel> LikedLiveStreamViewModels { get; set; }
    }
}
