using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Flag
{
    public class FlagCommentInput : MutationInputGraphType
    {
        public FlagCommentInput()
        {
            Name = nameof(FlagCommentInput);
           
            Field<NonNullGraphType<IntGraphType>>("CommentId");
            Field<NonNullGraphType<StringGraphType>>("Reason");
            Field<StringGraphType>("AdditionalDetails");
        }
    }
}
