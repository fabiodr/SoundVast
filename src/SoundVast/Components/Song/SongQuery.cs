using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public class SongQuery : ObjectGraphType
    {
        public SongQuery(ISongService songService)
        {
            Field<SongType>("Song",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id" }),
                resolve: context => songService.GetAudio(context.GetArgument<int>("id")));

            Field<ListGraphType<SongType>>("songs",
                resolve: context => songService.GetAudios());
        }
    }
}
