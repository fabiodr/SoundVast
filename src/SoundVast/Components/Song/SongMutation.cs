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

            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }
                ),
                resolve: context =>
                {
                    var song = context.GetArgument<Models.Song>("song");

                    songService.Add(song);

                    return song;
                });
        }
    }
}
