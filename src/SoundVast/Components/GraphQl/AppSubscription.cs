using GraphQL.Resolvers;
using GraphQL.Subscription;
using GraphQL.Types;
using SoundVast.Components.Comment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Threading.Tasks;

namespace SoundVast.Components.GraphQl
{
    public class AppSubscription : ObjectGraphType<object>
    {
        public AppSubscription(ICommentService commentService)
        {
            AddField(new EventStreamFieldType
            {
                Name = "commentAdded",
                Type = typeof(CommentPayload),
                Resolver = new FuncFieldResolver<Comment.Models.Comment>(c => {
                    return (Comment.Models.Comment)c.Source;
                }),
                Subscriber = new EventStreamResolver<Comment.Models.Comment>(c => {
                    var comments = commentService.GetComments().ToList();

                    return comments.ToObservable();
                }),
            });
        }
    }
}
