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
            Field(x => x.PlayCount);
            Field<DateGraphType>("dateAdded", "The date the user added the live stream");
            Field<AccountPayload>("user", "The user who uploaded the live stream");
            Field<ListGraphType<LiveStreamGenrePayload>>("genres", "The genre the live stream belongs to");
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this live stream");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the live stream");

            Interface<AudioInterface>();
        }

        public override Models.LiveStream GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
