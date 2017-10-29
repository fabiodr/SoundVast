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
using SoundVast.Components.Audio;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Rating;
using SoundVast.Components.Upload;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class AppMutation : ObjectGraphType
    {
        private const string AuthorizedPermission = "Authorized";
        private static string GetUserId (ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public AppMutation(IAudioService<Audio.Models.Audio> audioService,
            ISongService songService, ILiveStreamService liveStreamService)
        {
            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }),
                resolve: x =>
                {
                    var song = x.GetArgument<Song.Models.Song>("song");

                    song.UserId = GetUserId(x);
                    songService.Add(song);

                    return song;
                }).AddPermission(AuthorizedPermission);

            Field<LiveStreamType>("saveLiveStream",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<LiveStreamInputType>> { Name = "liveStream" }),
                resolve: x =>
                {
                    var liveStream = x.GetArgument<LiveStream.Models.LiveStream>("liveStream");

                    liveStream.UserId = GetUserId(x);
                    liveStreamService.Add(liveStream);

                    return liveStream;
                }).AddPermission(AuthorizedPermission);

            Field<RatingType>("rateAudio",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<AudioRatingInputType>> { Name = "audioRating" }),
                resolve: x =>
                {
                    var audioRating = x.GetArgument<Rating.Models.Rating>("audioRating");

                    audioRating.UserId = GetUserId(x);
                    audioService.RateAudio(audioRating);

                    return audioRating;
                }).AddPermission(AuthorizedPermission);
        }
    }
}
