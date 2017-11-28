using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights.AspNetCore.Extensions;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SoundVast.Components.Account.ViewModels;
using SoundVast.Components.FileStream;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Services;
using SoundVast.Validation;

namespace SoundVast.Components.Account
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult ExternalLogin(string provider, string returnUrl)
        {
            var redirectUrl = Url.RouteUrl("externalLoginCallback", new { returnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
      
            return Challenge(properties, provider);
        }

        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<IActionResult> ExternalLoginCallback(string returnUrl, string remoteError = null)
        //{
        //    if (remoteError != null)
        //    {
        //        _validationProvider.AddError("_error", $"Error from external provider: {remoteError}");

        //        return StatusCode((int)HttpStatusCode.BadRequest, _validationProvider.ValidationErrors);
        //    }
        //    var info = await _signInManager.GetExternalLoginInfoAsync();
        //    if (info == null)
        //    {
        //        return StatusCode((int)HttpStatusCode.BadRequest);
        //    }

        //    // Sign in the user with this external login provider if the user already has a login.
        //    var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
        //    if (result.Succeeded)
        //    {
        //        _logger.LogInformation(5, $"User logged in with {info.LoginProvider} provider.");

        //        return LocalRedirect(returnUrl);
        //    }

        //    // If the user does not have an account, then ask the user to create an account.
        //    var email = info.Principal.FindFirstValue(ClaimTypes.Email);
        //    var redirectUrl = Url.RouteUrl("externalLoginConfirmation", new
        //    {
        //        loginProvider = info.LoginProvider,
        //        returnUrl,
        //        email
        //    });

        //    return LocalRedirect(redirectUrl);
        //}
    }
}
