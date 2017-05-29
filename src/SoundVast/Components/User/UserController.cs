using System.Collections.Generic;
using AutoMapper;
using SoundVast.CustomHelpers;
using SoundVast.Repository;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.User.ViewModels;
using SoundVast.Data;

namespace SoundVast.Components.User
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