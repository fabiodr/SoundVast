using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.User.Profile
{
    public class ProfileController : Controller
    {
        private readonly IUserService _userService;
        private readonly UserManager<ApplicationUser> _userManager;

        public ProfileController(IUserService userService, UserManager<ApplicationUser> userManager)
        {
            _userService = userService;
            _userManager = userManager;
        }

        //[HttpGet]

        //public IActionResult GetUserUploads()
        //{
        //    var userId = _userManager.GetUserId(User);
        //  //  var userAudios = _userService.GetUploadsForUser(userId);

        //    return Ok(new
        //    {
        //        userAudios
        //    });
        //}
    }
}