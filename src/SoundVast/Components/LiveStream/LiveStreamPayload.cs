using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;
using Microsoft.WindowsAzure.Storage.Blob;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamPayload : GraphQL.Relay.Types.Temp.NodeGraphType<Models.LiveStream>
    {
        private readonly ILiveStreamService _liveStreamService;
        private readonly ICloudStorage _cloudStorage;

        public LiveStreamPayload(ILiveStreamService liveStreamService, ICloudStorage cloudStorage)
        {
            _liveStreamService = liveStreamService;
            _cloudStorage = cloudStorage;

            Name = nameof(Models.LiveStream);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.WebsiteUrl, nullable: true);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.Country);
            Field<ListGraphType<ImagePayload>>("coverImages", "The different dimention images for the cover image", resolve: GetCoverImages);
            Field<DateGraphType>("dateAdded", "The date the user added the live stream");
            Field<ListGraphType<GenrePayload>>("genres", "The genre the live stream belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this live stream");
            Field<ListGraphType<StreamDataPayload>>("streamDatas");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the live stream")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return ConnectionUtils.ToConnection(comments, c);
                });

            Interface<AudioInterface>();
        }

        public override Models.LiveStream GetById(string id)
        {
            return _liveStreamService.GetAudio(int.Parse(id));
        }

        private async Task<object> GetCoverImages(ResolveFieldContext<Models.LiveStream> c)
        {
            if (c.Source.CoverImageName == null) return null;

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
