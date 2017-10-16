using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public class SongMutation : ObjectGraphType
    {
        public SongMutation(ISongService songService)
        {
            Name = nameof(SongMutation);

            Field<SongType>(
                "addSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }
                ),
                resolve: context =>
                {
                    songService.Add(context.GetArgument<Models.Song>("song"));

                    return null;
                });
        }
    }
}
