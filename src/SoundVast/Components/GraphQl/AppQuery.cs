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
using SoundVast.Components.Filter;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Quote;
using SoundVast.Components.User;
using SoundVast.Validation;
using GraphQL.Types.Relay.DataObjects;
using GraphQL.Relay.Utilities;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ILiveStreamService liveStreamService, IValidationProvider validationProvider,
            IGenreService genreService, ILoggerFactory loggerFactory, IQuoteService quoteService,
            SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<QuotePayload>()
                .Name("quote")
                .Resolve(c => quoteService.GetRandomQuote());

            Connection<LiveStreamPayload>()
                .Name("liveStreams")
                .Argument<StringGraphType>("genre", "The genre that the live stream belongs to")
                .Argument<StringGraphType>("searchQuery", "The search query to filter the liveStreams against")
                .Argument<FilterInput>("filter", "The filters to apply to the live streams")
                .Resolve(c =>
                {
                    var genre = c.GetArgument<string>("genre");
                    var searchQuery = c.GetArgument<string>("searchQuery");
                    var filter = c.GetArgument<Filter.Filter>("filter");
                    var offset = ConnectionUtils.OffsetOrDefault(c.After, 0);
                    var page = ((offset + 1) / c.First.Value) + 2;

                    if (filter.Newest)
                    {
                        var liveStreams = liveStreamService.GetLiveStreams(c.First.Value * page, genre, searchQuery);

                        return ConnectionUtils.ToConnection(liveStreams, c);
                    }

                    return liveStreamService.GetPopularLiveStreams(page, genre, searchQuery)
                            .ContinueWith(x => ConnectionUtils.ToConnection(x.Result, c));
                });

            Field<ListGraphType<GenrePayload>>("genres",
                resolve: c => genreService.GetGenres());

            Field<AccountPayload>()
                .Name("user")
                .Resolve(c => c.UserContext.As<Context>().CurrentUser);

            Field<ExternalLoginCallbackPayload>()
                .Name("externalLoginCallback")
                .ResolveAsync(async c =>
                {
                    var info = await signInManager.GetExternalLoginInfoAsync();
                    if (info == null)
                    {
                        validationProvider.AddError("_error", "Could not get external login information");

                        return null;
                    }

                    // Sign in the user with this external login provider if the user already has a login.
                    var result = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
                    ApplicationUser user = null;

                    if (result.Succeeded)
                    {
                        user = await signInManager.UserManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

                        logger.LogInformation(5, $"User logged in with {info.LoginProvider} provider.");
                    }
                    var userName = info.Principal.FindFirstValue(ClaimTypes.Name);

                    // If the user does not have an account, then ask the user to create an account.
                    return new
                    {
                        user,
                        loginProvider = info.LoginProvider,
                        userName
                    };
                });


            Field<BooleanGraphType>()
                .Name("confirmEmail")
                .Argument<NonNullGraphType<StringGraphType>>("userId", "The id of the user")
                .Argument<NonNullGraphType<StringGraphType>>("token", "The unique code to verify the email")
                .ResolveAsync(async c =>
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
                });

            Field<ListGraphType<LoginProvidersPayload>>()
                .Name("loginProviders")
                .ResolveAsync(async c =>
                {
                    var providers = await signInManager.GetExternalAuthenticationSchemesAsync();

                    return providers;
                });
        }
    }
}
