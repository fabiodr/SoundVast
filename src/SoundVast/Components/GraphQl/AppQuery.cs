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
using SoundVast.Components.Album;
using SoundVast.Components.Artist;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Edit;
using SoundVast.Components.Filter;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Playlist;
using SoundVast.Components.Quote;
using SoundVast.Components.Song;
using SoundVast.Components.User;
using SoundVast.Validation;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ISongService songService, ILiveStreamService liveStreamService, IValidationProvider validationProvider,
            IAudioService<Audio.Models.Audio> audioService, ISongGenreService songGenreService, ILiveStreamGenreService liveStreamGenreService,
            ILoggerFactory loggerFactory, IQuoteService quoteService, IPlaylistService playlistService,
            ISongPendingEditService songPendingEditService, ILiveStreamPendingEditService liveStreamPendingEditService,
            SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, IArtistService artistService,
            IAlbumService albumService)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<SongPayload>()
                .Name("song")
                .Argument<NonNullGraphType<IntGraphType>>("id", "The id of the song")
                .Resolve(c => songService.GetAudio(c.GetArgument<int>("id")));

            Field<PlaylistPayload>()
                .Name("playlist")
                .Argument<NonNullGraphType<IntGraphType>>("id", "The id of the playlist")
                .Resolve(c => playlistService.GetPlaylist(c.GetArgument<int>("id")));

            Field<QuotePayload>()
                .Name("quote")
                .Resolve(c => quoteService.GetRandomQuote());

            Connection<SongPayload>()
                .Name("songs")
                .Argument<StringGraphType>("genre", "The genre that the song belongs to")
                .Argument<StringGraphType>("searchQuery", "The search query to filter the songs against")
                .Argument<FilterInput>("filter", "The filters to apply to the songs")
                .Resolve(c =>
                {                    
                    var genre = c.GetArgument<string>("genre");
                    var searchQuery = c.GetArgument<string>("searchQuery");
                    var filter = c.GetArgument<Filter.Filter>("filter");
                    var songs = songService.GetAudios(genre, searchQuery, filter);

                    return GraphQL.Relay.Types.Connection.ToConnection(songs, c);
                });

            Connection<ArtistPayload>()
                .Name("artists")
                .Argument<StringGraphType>("genre", "The genre that the artist belongs to")
                .Argument<StringGraphType>("searchQuery", "The search query to filter the artists against")
                .Argument<FilterInput>("filter", "The filters to apply to the artists")
                .Resolve(c =>
                {
                    var genre = c.GetArgument<string>("genre");
                    var searchQuery = c.GetArgument<string>("searchQuery");
                    var filter = c.GetArgument<Filter.Filter>("filter");
                    var artists = artistService.GetAudios(genre, searchQuery, filter);

                    return GraphQL.Relay.Types.Connection.ToConnection(artists, c);
                });

            Connection<AlbumPayload>()
                .Name("albums")
                .Argument<StringGraphType>("genre", "The genre that the album belongs to")
                .Argument<StringGraphType>("searchQuery", "The search query to filter the albums against")
                .Argument<FilterInput>("filter", "The filters to apply to the albums")
                .Resolve(c =>
                {
                    var genre = c.GetArgument<string>("genre");
                    var searchQuery = c.GetArgument<string>("searchQuery");
                    var filter = c.GetArgument<Filter.Filter>("filter");
                    var albums = albumService.GetAudios(genre, searchQuery, filter);

                    return GraphQL.Relay.Types.Connection.ToConnection(albums, c);
                });

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

                    return GraphQL.Relay.Types.Connection.ToConnection(liveStreamService.GetAudios(genre, searchQuery, filter), c);
                });

            Connection<SongPendingEditPayload>()
                .Name("songsPendingEdit")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(songPendingEditService.GetAudiosPendingEdit(), c));

            Connection<LiveStreamPendingEditPayload>()
                .Name("liveStreamsPendingEdit")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(liveStreamPendingEditService.GetAudiosPendingEdit(), c));

            Field<ListGraphType<SongGenrePayload>>("songGenres",
                resolve: c => songGenreService.GetGenres());

            Field<ListGraphType<LiveStreamGenrePayload>>("liveStreamGenres",
                resolve: c => liveStreamGenreService.GetGenres());

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
