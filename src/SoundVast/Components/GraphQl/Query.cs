using GraphQL.Types;
using SoundVast.Components.Song;

namespace SoundVast.Components.GraphQl
{
    public class Query : ObjectGraphType
    {
        public Query(ISongService songService)
        {
            Field<SongType>("Song",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id" }),
                resolve: context => songService.GetAudio(context.GetArgument<int>("id")));

            Field<ListGraphType<SongType>>("songs",
                resolve: context => songService.GetAudios());
        }
    }
}
