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

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamPayload : NodeGraphType<Models.LiveStream>
    {
        private readonly ILiveStreamService _liveStreamService;

        public LiveStreamPayload(ILiveStreamService liveStreamService, ICloudStorage cloudStorage)
        {
            _liveStreamService = liveStreamService;

            Name = nameof(Models.LiveStream);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field<StringGraphType>("coverImageUrl", "The cover image url for the live stream", 
                resolve: c => cloudStorage.CloudBlobContainers[CloudStorageType.Image].GetBlockBlobReference(c.Source.CoverImageName).Uri.AbsoluteUri);
            Field(x => x.LiveStreamUrl);
            Field(x => x.WebsiteUrl);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Field<DateGraphType>("dateAdded", "The date the user added the live stream");
            Field<AccountPayload>("user", "The user who uploaded the live stream");
            Field<ListGraphType<GenrePayload>>("genres", "The genre the live stream belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this live stream");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the live stream")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return GraphQL.Relay.Types.Connection.ToConnection(comments, c);
                });

            Interface<AudioInterface>();
        }

        public override Models.LiveStream GetById(string id)
        {
            return _liveStreamService.GetAudio(int.Parse(id));
        }
    }
}
