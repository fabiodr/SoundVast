using System;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Builders;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Account;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Song;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ISongService songService, ILiveStreamService liveStreamService,
            IGenreService genreService, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            Field<SongPayload>("song",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id" }),
                resolve: c => songService.GetAudio(c.GetArgument<int>("id")));

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

            Field<ListGraphType<LoginProvidersPayload>>()
                .Name("loginProviders")
                .Resolve(c => signInManager.GetExternalAuthenticationSchemes());
        }
    }
}
