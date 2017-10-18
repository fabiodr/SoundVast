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
        public Mutation(IValidationProvider validationProvider, ISongService songService)
        {
            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }),
                resolve: context =>
                {
                    var song = context.GetArgument<Song.Models.Song>("song");

                    try
                    {
                        songService.Add(song);
                    }
                    catch (ValidationException e)
                    {
                        validationProvider.AddModelErrors(e);
                    }
                    return song;
                });
        }
    }
}
