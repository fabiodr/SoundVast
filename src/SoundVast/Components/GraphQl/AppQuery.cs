using GraphQL.Types;
using SoundVast.Components.Genre;
using SoundVast.Components.Song;

namespace SoundVast.Components.GraphQl
{
    public class AppQuery : ObjectGraphType
    {
        public AppQuery(ISongService songService, IGenreService genreService)
        {
            Field<SongType>("song",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id" }),
                resolve: context => songService.GetAudio(context.GetArgument<int>("id")));

            Connection<SongType>().Name("songs").Resolve(x =>
            {
                var args = x.GetConnectionArguments();

                var canStopEarly =
                    args.After != null ||
                    args.Before != null ||
                    args.Last != null ||
                    args.First == null;

                var audios = songService.GetAudios();

                return GraphQL.Relay.Types.Connection.ToConnection(audios, x);
            });

            Field<ListGraphType<GenreType>>("genres",
                resolve: context => genreService.GetGenres());
        }
    }
}
