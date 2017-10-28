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
using SoundVast.Components.LiveStream;
using SoundVast.Components.Upload;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class AppMutation : ObjectGraphType
    {
        public AppMutation(ISongService songService, ILiveStreamService liveStreamService)
        {
            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }),
                resolve: context =>
                {
                    var song = context.GetArgument<Song.Models.Song>("song");

                    song.UserId = context.UserContext.As<Context>().ApplicationUser.Id;
                    songService.Add(song);

                    return song;
                }).AddPermission("Authorized");

            Field<LiveStreamType>("saveLiveStream",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<LiveStreamInputType>> { Name = "liveStream" }),
                resolve: context =>
                {
                    var liveStream = context.GetArgument<LiveStream.Models.LiveStream>("liveStream");

                    liveStream.UserId = context.UserContext.As<Context>().ApplicationUser.Id;
                    liveStreamService.Add(liveStream);

                    return liveStream;
                }).AddPermission("Authorized");
        }
    }
}
