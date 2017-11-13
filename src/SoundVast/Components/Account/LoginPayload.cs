using System;
using System.Collections.Generic;
using System.Linq;
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
    public class LoginPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly IValidationProvider _validationProvider;

        public LoginPayload(SignInManager<ApplicationUser> signInManager, ILoggerFactory loggerFactory,
            IValidationProvider validationProvider)
        {
            _signInManager = signInManager;
            _validationProvider = validationProvider;
            _logger = loggerFactory.CreateLogger<LoginPayload>();

            Name = nameof(LoginPayload);

            Field<AccountPayload>("user");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var username = inputs.Get<string>("username");
            var rememberMe = inputs.Get<bool>("rememberMe");
            var password = inputs.Get<string>("password");

            var result = await _signInManager.PasswordSignInAsync(username, password, rememberMe, false);

            if (result.Succeeded)
            {
                _logger.LogInformation(1, "User logged in.");

                var user = new ApplicationUser
                {
                    UserName = username,
                };

                return new
                {
                    user
                };
            }

            _validationProvider.AddError("_error", "Invalid login attempt.");

            return null;
        }
    }
}
