using GraphQL.Types;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Song;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : ObjectGraphType
    {
        public AppQuery(ISongService songService, ILiveStreamService liveStreamService, IGenreService genreService)
        {
            Field<SongType>("song",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id" }),
                resolve: context => songService.GetAudio(context.GetArgument<int>("id")));

            Connection<SongType>()
                .Name("songs")
                .Resolve(x => GraphQL.Relay.Types.Connection.ToConnection(songService.GetAudios(), x));

            Connection<LiveStreamType>()
                .Name("liveStreams")
                .Resolve(x => GraphQL.Relay.Types.Connection.ToConnection(liveStreamService.GetAudios(), x));

            Field<ListGraphType<GenreType>>("genres",
                resolve: context => genreService.GetGenres());
        }
    }
}
