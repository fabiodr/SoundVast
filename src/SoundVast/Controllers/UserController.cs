using System.Collections.Generic;
using AutoMapper;
using SoundVast.CustomHelpers;
using SoundVast.Repository;
using SoundVast.ServiceLayer;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Data;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.UserViewModels;

namespace SoundVast.Controllers
{
    [AjaxAuthorize]
    public class UserController : CustomBaseController
    {
        [ActionName("Profile")]
        public IActionResult UserProfile()
        {
            var profileViewModel = new ProfileViewModel(User.Identity.Name);

            return ViewOrPartial(profileViewModel);
        }
    }
}