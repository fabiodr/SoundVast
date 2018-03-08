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
using SoundVast.Components.User;

namespace SoundVast.Components.Comment
{
    public class CommentPayload : GraphQL.Relay.Types.Temp.NodeGraphType<Models.Comment>
    {
        private readonly ICommentService _commentService;

        public CommentPayload(ICommentService commentService)
        {
            _commentService = commentService;

            Name = nameof(Models.Comment);

            Id(x => x.Id);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.Body).Description("The body of the comment");
            Field<DateGraphType>("dateAdded", "The date when the comment was made");
            Field<NonNullGraphType<AccountPayload>>("user", "The user who added the comment");
            Field<NonNullGraphType<AudioInterface>>("audio", "The audio that the comment was added to");
            Field<CommentPayload>("originalComment", "The original comment that this is a reply to");
            Connection<CommentPayload>()
                .Name("replies")
                .Description("The reply tree for the top level comments")
                .Resolve(c =>
                {
                    var topLevelReplies = c.Source.TopLevelReplies(c.Source);

                    return ConnectionUtils.ToConnection(topLevelReplies, c);
                });
        }

        public override Models.Comment GetById(string id)
        {
            return _commentService.Get(int.Parse(id));
        }
    }
}
