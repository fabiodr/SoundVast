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
    public class GenerateResetPasswordTokenPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IValidationProvider _validationProvider;

        public GenerateResetPasswordTokenPayload(UserManager<ApplicationUser> userManager, IValidationProvider validationProvider)
        {
            _userManager = userManager;
            _validationProvider = validationProvider;

            Name = nameof(GenerateResetPasswordTokenPayload);

            Field<AccountPayload>("user");
            Field<StringGraphType>("passwordResetToken");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var email = inputs.Get<string>("email");

            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                _validationProvider.AddError("_error", "We couldn't find that email address");

                return null;
            }

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            var passwordResetToken = System.Web.HttpUtility.UrlEncode(code);

            return new
            {
                user,
                passwordResetToken
            };
        }
    }
}
