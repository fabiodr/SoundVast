using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Builders;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using SoundVast.Components.Account;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Song;
using SoundVast.Components.User;
using SoundVast.Validation;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ISongService songService, ILiveStreamService liveStreamService, IValidationProvider validationProvider,
            IGenreService genreService, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager,
            ILoggerFactory loggerFactory)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<SongPayload>()
                .Name("song")
                .Argument<NonNullGraphType<StringGraphType>>("id", "The id of the song")
                .Resolve(c => songService.GetAudio(c.GetArgument<int>("id")));

            Connection<SongPayload>()
                .Name("songs")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(songService.GetAudios(), c));

            Connection<LiveStreamPayload>()
                .Name("liveStreams")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(liveStreamService.GetAudios(), c));

            Field<ListGraphType<GenreType>>("genres",
                resolve: c => genreService.GetGenres());

            Field<AccountPayload>()
                .Name("user")
                .Resolve(c => c.UserContext.As<Context>().CurrentUser);

            Field<ExternalLoginCallbackPayload>()
                .Name("externalLoginCallback")
                .Resolve(new Func<ResolveFieldContext<object>, Task<object>>(async c =>
                {
                    var info = await signInManager.GetExternalLoginInfoAsync();
                    if (info == null)
                    {
                        validationProvider.AddError("_error", "Could not get external login information");

                        return null;
                    }

                    // Sign in the user with this external login provider if the user already has a login.
                    var result = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
                    if (result.Succeeded)
                    {
                        logger.LogInformation(5, $"User logged in with {info.LoginProvider} provider.");

                        return null;
                    }

                    // If the user does not have an account, then ask the user to create an account.
                    var email = info.Principal.FindFirstValue(ClaimTypes.Email);
     
                    return new
                    {
                        loginProvider = info.LoginProvider,
                        email
                    };
                }));


            Field<BooleanGraphType>()
                .Name("confirmEmail")
                .Argument<NonNullGraphType<StringGraphType>>("userId", "The id of the user")
                .Argument<NonNullGraphType<StringGraphType>>("token", "The unique code to verify the email")
                .Resolve(new Func<ResolveFieldContext<object>, Task<IEnumerable<AuthenticationScheme>>>(async c =>
                {
                    var userId = c.GetArgument<string>("userId");
                    var token = c.GetArgument<string>("token");

                    var user = await userManager.FindByIdAsync(userId);

                    if (user == null)
                    {
                        validationProvider.AddError("_error", "No user could be found");

                        return null;
                    }
                    var result = await userManager.ConfirmEmailAsync(user, token);

                    if (!result.Succeeded)
                    {
                        validationProvider.AddError("_error", "Could not confirm your email. Please try again.");
                    }

                    return null;
                }));

            Field<ListGraphType<LoginProvidersPayload>>()
                .Name("loginProviders")
                .Resolve(new Func<ResolveFieldContext<object>, Task<IEnumerable<AuthenticationScheme>>>(async c =>
                {
                    var providers = await signInManager.GetExternalAuthenticationSchemesAsync();

                    return providers;
                }));
        }
    }
}
