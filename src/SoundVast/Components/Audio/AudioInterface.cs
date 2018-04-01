using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Account;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.Audio.Models;
using GraphQL.Relay.Types;

namespace SoundVast.Components.Audio
{
    public class AudioInterface : InterfaceGraphType<Models.Audio>
    {
        private readonly ICloudStorage _cloudStorage;

        public AudioInterface(ICloudStorage cloudStorage)
        {
            _cloudStorage = cloudStorage;

            Name = nameof(Models.Audio);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("audioId");
            Field(x => x.Name);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field<StringGraphType>("coverImageUrl", "The cover image url", resolve: GetCoverImageUrl);
            Field<DateGraphType>("dateAdded", "The date the user added the audio");
            Field<ListGraphType<GenrePayload>>("genres", "The genres the audio belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this audio");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the audio")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return ConnectionUtils.ToConnection(comments, c);
                });
        }

        private object GetCoverImageUrl(ResolveFieldContext<Models.Audio> c)
        {
            if (c.Source.CoverImageName == null) return null;

            return $"{_cloudStorage.CloudBlobContainers[CloudStorageType.Image].Uri.AbsoluteUri}/{c.Source.CoverImageName}";
        }
    }
}
