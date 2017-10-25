using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using SoundVast.Components.Song;
using SoundVast.Validation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SoundVast.Components.Upload;
using SoundVast.Components.User;

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

                    song.UserId = context.UserContext.As<UserContext>().UserId;
                    songService.Add(song);
                    
                    return song;
                });
        }
    }
}
