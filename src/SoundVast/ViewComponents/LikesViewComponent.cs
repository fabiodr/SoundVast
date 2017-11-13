//using AutoMapper;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using System.Security;
//using System.Security.Claims;
//using Microsoft.AspNetCore.Identity;
//using SoundVast.Components.FileStream;
//using SoundVast.Components.FileStream.Models;
//using SoundVast.Components.LiveStream;
//using SoundVast.Components.LiveStream.Models;
//using SoundVast.Components.Playlist;
//using SoundVast.Components.Playlist.Models;
//using SoundVast.Components.User;
//using SoundVast.Components.User.ViewModels;

//namespace SoundVast.ViewComponents
//{
//    public class LikesViewComponent : ViewComponent
//    {
//        private readonly IMapper _mapper;
//        private readonly IPlaylistService _playlistService;
//        private readonly IFileStreamService _fileStreamService;
//        private readonly ILiveStreamService _liveStreamService;
//        private readonly UserManager<ApplicationUser> _userManager;
//        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

//        public LikesViewComponent(IMapper mapper, IPlaylistService playlistService, IFileStreamService fileStreamService, 
//            ILiveStreamService liveStreamService, UserManager<ApplicationUser> userManager)
//        {
//            _mapper = mapper;
//            _playlistService = playlistService;
//            _fileStreamService = fileStreamService;
//            _liveStreamService = liveStreamService;
//            _userManager = userManager;
//        }

//        public async Task<IViewComponentResult> InvokeAsync()
//        {
//            var user = await GetCurrentUserAsync();
//            var userId = user.Id;

//            var likedAudioListViewModel = new LikedAudioListViewModel
//            {
//                //LikedFileStreamViewModels = Mapper.Map<ICollection<FileStreamModel>, ICollection<LikedFileStreamViewModel>>(_fileStreamService.GetLikedAudiosForUser(userId)),
//                //LikedLiveStreamViewModels = Mapper.Map<ICollection<LiveStream>, ICollection<LikedLiveStreamViewModel>>(_liveStreamService.GetLikedAudiosForUser(userId)),
//                //LikedPlaylistViewModels = Mapper.Map<ICollection<PlaylistModel>, ICollection<LikedPlaylistViewModel>>(_playlistService.GetLikedAudiosForUser(userId))
//            };

//            return View(likedAudioListViewModel);
//        }
//    }
//}
