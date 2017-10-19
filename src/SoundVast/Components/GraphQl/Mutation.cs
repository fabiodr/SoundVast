using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GraphQL.Types;
using SoundVast.Components.Song;
using SoundVast.Validation;

namespace SoundVast.Components.GraphQl
{
    public class Mutation : ObjectGraphType
    {
        public Mutation(ISongService songService)
        {
            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }),
                resolve: context =>
                {
                    var song = context.GetArgument<Song.Models.Song>("song");

                    songService.Add(song);
                    
                    return song;
                });
        }
    }
}
