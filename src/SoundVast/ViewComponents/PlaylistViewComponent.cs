using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.UserViewModels;
using SoundVast.ServiceLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using SoundVast.Models;

namespace SoundVast.ViewComponents
{
    public class PlaylistiewComponent : ViewComponent
    {
        private readonly IMapper _mapper;
        private readonly IPlaylistService _playlistService;
        private readonly UserManager<ApplicationUser> _userManager;
        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

        public PlaylistiewComponent(IMapper mapper, IPlaylistService playlistService, UserManager<ApplicationUser> userManager)
        {
            _mapper = mapper;
            _playlistService = playlistService;
            _userManager = userManager;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var user = await GetCurrentUserAsync();
            var userId = user.Id;

            var playlistViewModels = Mapper.Map<ICollection<Playlist>, ICollection<PlaylistViewModel>>(_playlistService.GetAudiosForUser(userId));

            return View(playlistViewModels);
        }
    }
}
