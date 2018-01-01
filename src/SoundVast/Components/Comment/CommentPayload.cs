using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Comment
{
    public class CommentPayload : NodeGraphType<Models.Comment>
    {
        public CommentPayload()
        {
            Name = nameof(Models.Comment);

            Id(x => x.Id);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.RepliesCount);
            Field(x => x.Body).Description("The body of the comment");
            Field<DateGraphType>("dateAdded", "The date when the comment was made");
            Field<NonNullGraphType<AccountPayload>>("user", "The user who added the comment");
            Field<NonNullGraphType<AudioInterface>>("audio", "The audio that the comment was added to");
            Field<CommentPayload>("originalComment", "The original comment that this comment was a reply to");
        }

        public override Models.Comment GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
