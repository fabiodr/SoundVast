using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class ResetPasswordPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IValidationProvider _validationProvider;

        public ResetPasswordPayload(UserManager<ApplicationUser> userManager, IValidationProvider validationProvider)
        {
            _userManager = userManager;
            _validationProvider = validationProvider;

            Name = nameof(ResetPasswordPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var userId = inputs.Get<string>("userId");
            var token = inputs.Get<string>("token");
            var password = inputs.Get<string>("password");
            var user = await _userManager.FindByIdAsync(userId);
            var result = await _userManager.ResetPasswordAsync(user, token, password);

            foreach (var identityError in result.Errors)
            {
                _validationProvider.AddError("_error", identityError.Description);
            }

            return null;
        }
    }
}
