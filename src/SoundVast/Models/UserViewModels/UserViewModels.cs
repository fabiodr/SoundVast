using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace SoundVast.Models.UserViewModels
{
    public class ProfileViewModel
    {
        public string UserName { get; }

        public ProfileViewModel(string userName)
        {
            UserName = userName;
        }
    }

    public class PlaylistViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string UserName { get; set; }
    }

    public class LikedAudioListViewModel
    {
        public ICollection<LikedFileStreamViewModel> LikedFileStreamViewModels { get; set; }
        public ICollection<LikedPlaylistViewModel> LikedPlaylistViewModels { get; set; }
        public ICollection<LikedLiveStreamViewModel> LikedLiveStreamViewModels { get; set; }
    }

    public class LikedFileStreamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }

    public class LikedPlaylistViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }

    public class LikedLiveStreamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }
}