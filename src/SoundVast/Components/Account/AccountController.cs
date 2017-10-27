using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Policy;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
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

namespace SoundVast.Components.Account
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private const string ModelError = "_error";

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<AccountController>();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAccountDetails()
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            
            return Ok(new
            {
                user?.UserName,
                IsLoggedIn = user != null,
                IsAdmin = User.IsInRole("Admin")
            });
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetSocialLogins()
        {
            var loginProviders = _signInManager.GetExternalAuthenticationSchemes().ToList();

            return Ok(new
            {
                loginProviders
            });
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    _logger.LogInformation(1, "User logged in.");

                    return Ok();
                }
                ModelState.AddModelError(ModelError, "Invalid login attempt.");
            }

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    UserName = model.Username,
                    Email = model.Email
                };
                user.Claims.Add(new IdentityUserClaim<string>
                {
                    ClaimType = "Authorization",
                    ClaimValue = "Authorized"
                });

                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var confirmEmailLink = Url.Action(nameof(ConfirmEmail), "Account", new
                    {
                        userId = user.Id,
                        code
                    }, HttpContext.Request.Scheme);

                    await _signInManager.SignInAsync(user, true);
                    _logger.LogInformation(3, "User created a new account with password.");

                    return Ok(new
                    {
                        email = user.Email,
                        confirmEmailLink
                    });
                }
                AddErrors(result);
            }

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();

            _logger.LogInformation(4, "User logged out.");

            return Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public IActionResult ExternalLogin(string provider, string returnUrl)
        {
            // Request a redirect to the external login provider.
            var redirectUrl = Url.Action(nameof(ExternalLoginCallback), new { returnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
      
            return Challenge(properties, provider);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ExternalLoginCallback(string returnUrl, string remoteError = null)
        {
            if (remoteError != null)
            {
                ModelState.AddModelError(ModelError, $"Error from external provider: {remoteError}");

                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
            }
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return StatusCode((int)HttpStatusCode.BadRequest);
            }

            // Sign in the user with this external login provider if the user already has a login.
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
            if (result.Succeeded)
            {
                _logger.LogInformation(5, "User logged in with {Name} provider.", info.LoginProvider);

                return LocalRedirect(returnUrl);
            }

            if (result.IsLockedOut)
            {
                return LocalRedirect(Url.Action("Lockout"));
            }

            // If the user does not have an account, then ask the user to create an account.
            var email = info.Principal.FindFirstValue(ClaimTypes.Email);
            var redirectUrl = Url.Action(nameof(ExternalLoginConfirmation), new
            {
                loginProvider = info.LoginProvider,
                returnUrl,
                email
            });

            return LocalRedirect(redirectUrl);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ExternalLoginConfirmation(ExternalLoginConfirmationViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await _signInManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return LocalRedirect("/Account/ExternalLoginFailure");
                }
                var userName = info.Principal.FindFirstValue(ClaimTypes.Name);

                var user = new ApplicationUser
                {
                    UserName = userName,
                    Email = model.Email
                };
                user.Claims.Add(new IdentityUserClaim<string>
                {
                    ClaimType = "Authorization",
                    ClaimValue = "Authorized"
                });
                var result = await _userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    result = await _userManager.AddLoginAsync(user, info);
                    if (result.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, true);
                        _logger.LogInformation(6, "User created an account using {Name} provider.", info.LoginProvider);
                        return LocalRedirect(model.ReturnUrl);
                    }
                }
                AddErrors(result);
            }

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(ConfirmEmailViewModel model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);

            if (user == null)
            {
                return LocalRedirect("/Error");
            }
            var result = await _userManager.ConfirmEmailAsync(user, model.Code);

            return LocalRedirect(result.Succeeded ? "/Account/SuccessfullyConfirmedEmail" : "/Error");
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> GeneratePasswordResetLink(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);

                if (user == null)
                {
                    ModelState.AddModelError(ModelError, "We couldn't find that email address");

                    return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                // Send an email with this link
                var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                var resetPasswordLink = Url.Action(nameof(ResetPassword), "Account", new
                {
                    userId = user.Id,
                    code
                }, HttpContext.Request.Scheme);

                return Ok(new
                {
                    email = model.Email,
                    resetPasswordLink
                });
            }

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
            }
            var user = await _userManager.FindByIdAsync(model.UserId);
            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);

            if (result.Succeeded)
            {
                return Ok();
            }

            AddErrors(result);

            return StatusCode((int)HttpStatusCode.BadRequest, ModelState.ConvertErrorsToJson());
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(ModelError, error.Description);
            }
        }
    }
}
