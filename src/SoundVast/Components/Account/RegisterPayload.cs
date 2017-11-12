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
    public class RegisterPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly IValidationProvider _validationProvider;

        public RegisterPayload(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, ILoggerFactory loggerFactory,
            IValidationProvider validationProvider)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _validationProvider = validationProvider;
            _logger = loggerFactory.CreateLogger<RegisterPayload>();

            Name = nameof(RegisterPayload);
           
            Field<AccountPayload>("user");
            Field<StringGraphType>("emailConfirmationToken");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var username = inputs.Get<string>("username");
            var email = inputs.Get<string>("email");
            var password = inputs.Get<string>("password");
            var user = new ApplicationUser
            {
                UserName = username,
                Email = email
            };

            await _userManager.AddClaimAsync(user, new Claim("Authorization", "Authorized"));

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                await _signInManager.SignInAsync(user, true);
                _logger.LogInformation(3, "User created a new account with password.");

                return new
                {
                    user,
                    emailConfirmationToken
                };
            }

            foreach (var identityError in result.Errors)
            {
                _validationProvider.AddError("_error", identityError.Description);
            }

            return null;
        }
    }
}
