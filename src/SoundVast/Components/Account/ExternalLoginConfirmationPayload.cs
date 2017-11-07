using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Policy;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;
using SoundVast.Validation;

namespace SoundVast.Components.Account
{
    public class ExternalLoginConfirmationPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger _logger;
        private readonly IValidationProvider _validationProvider;

        public ExternalLoginConfirmationPayload(
            SignInManager<ApplicationUser> signInManager, 
            ILoggerFactory loggerFactory, 
            UserManager<ApplicationUser> userManager,
            IValidationProvider validationProvider)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _validationProvider = validationProvider;
            _logger = loggerFactory.CreateLogger<ExternalLoginConfirmationPayload>();

            Name = nameof(ExternalLoginConfirmationPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var email = inputs.Get<string>("email");

            // Get the information about the user from the external login provider
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                _validationProvider.AddError("_error", "Failed to create an account.");

                return null;
            }
            var userName = info.Principal.FindFirstValue(ClaimTypes.Name);

            var user = new ApplicationUser
            {
                UserName = userName,
                Email = email
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
                }
            }

            return null;
        }
    }
}
