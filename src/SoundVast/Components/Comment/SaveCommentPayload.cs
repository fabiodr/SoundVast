using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.Comment
{
    public class SaveCommentPayload : MutationPayloadGraphType
    {
        private readonly ICommentService _commentService;

        public SaveCommentPayload(ICommentService commentService)
        {
            _commentService = commentService;

            Name = nameof(SaveCommentPayload);
           
            Field<CommentPayload>("comment");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var body = inputs.Get<string>("body");
            var originalCommentId = inputs.Get<int?>("originalCommentId");
            var audioId = inputs.Get<int>("audioId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var comment = new Models.Comment
            {
                UserId = user.Id,
                Body = body,
                AudioId = audioId,
                OriginalCommentId = originalCommentId,
            };

            _commentService.Add(comment);

            return new
            {
                comment
            };
        }
    }
}
