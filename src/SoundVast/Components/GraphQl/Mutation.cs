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
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SoundVast.Components.Upload;

namespace SoundVast.Components.GraphQl
{
    public class Mutation : ObjectGraphType
    {
        private readonly IUploader _uploader;

        public Mutation(ISongService songService, IUploader uploader)
        {
            _uploader = uploader;

            Field<SongType>("saveSong",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<SongInputType>> { Name = "song" }),
                resolve: context =>
                {
                    var song = context.GetArgument<Song.Models.Song>("song");

                    songService.Add(song);
                    
                    return song;
                });

            Field<UploadImageType>("uploadImage",
                resolve: UploadImage);
        }

        private async Task<object> UploadImage(ResolveFieldContext<object> context)
        {
            var files = context.UserContext.As<IFormFileCollection>();
            var imagePath = await _uploader.UploadImage(files[0]);

            return new
            {
                imagePath
            };
        }
    }
}
