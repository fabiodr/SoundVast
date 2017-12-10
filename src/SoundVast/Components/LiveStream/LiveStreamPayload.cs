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
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamPayload : NodeGraphType<Models.LiveStream>
    {
        public LiveStreamPayload(ICommentService commentService)
        {
            Name = nameof(Models.LiveStream);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the live stream");
            Field(x => x.LiveStreamUrl);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field<AccountPayload>("user", "The user who uploaded the live stream");
            Field<GenrePayload>("genre", "The genre the live stream belongs to");
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this live stream");
            Connection<CommentPayload>()
                .Name("comments")
                .Argument<IntGraphType>("originalCommentId", "Get the replies for the original comment instead")
                .Description("The comments for the live stream")
                .Resolve(c =>
                {
                    var audioId = c.Source.Id;
                    var originalCommentId = c.GetArgument<int?>("originalCommentId");

                    if (originalCommentId.HasValue)
                    {
                        return GraphQL.Relay.Types.Connection.ToConnection(commentService.Replies(originalCommentId.Value), c);
                    }

                    return GraphQL.Relay.Types.Connection.ToConnection(commentService.TopLevelComments(audioId), c);
                });

            Interface<AudioInterface>();
        }

        public override Models.LiveStream GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
