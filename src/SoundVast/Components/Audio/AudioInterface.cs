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
            Field(x => x.PlayCount);
            Field<ListGraphType<ImagePayload>>("coverImages", "The different dimention images for the cover image", resolve: GetCoverImages);
            Field<DateGraphType>("dateAdded", "The date the user added the audio");
            Field<AccountPayload>("user", "The user who uploaded the audio");
            Field<ListGraphType<GenrePayload>>("genres", "The genres the audio belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this audio");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the audio")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return GraphQL.Relay.Types.Connection.ToConnection(comments, c);
                });
        }

        private async Task<object> GetCoverImages(ResolveFieldContext<Models.Audio> c)
        {
            var container = _cloudStorage.CloudBlobContainers[CloudStorageType.Image];
            var segmentedBlobs = await container.ListBlobsSegmentedAsync(c.Source.CoverImageName, null);
            var blobs = segmentedBlobs.Results.OfType<CloudBlockBlob>();
            var coverImageUrls = blobs.Select(x => x.Uri.AbsoluteUri);
            var images = Image.CoverImageSizes.Select(x =>
            {
                var coverImageUrl = coverImageUrls.Single(z => z.Contains(x.Key));

                return new Image
                {
                    Dimention = x.Key,
                    ImageUrl = coverImageUrl,
                };
            });

            return images;
        }
    }
}
