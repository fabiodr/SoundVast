using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public class SongsQuery : ObjectGraphType
    {
        public SongsQuery(ISongService songService)
        {
            Field<SongType>("Song",
                arguments: new QueryArguments(new QueryArgument<IntGraphType> { Name = "id" }),
                resolve: context => songService.GetAudio(context.GetArgument<int>("id")));

            //Field<ListGraphType<SongType>>("songs",
            //    resolve: context => songService.GetAudios());
        }
    }
}
