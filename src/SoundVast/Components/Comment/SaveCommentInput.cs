using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Comment
{
    public class SaveCommentInput : MutationInputGraphType
    {
        public SaveCommentInput()
        {
            Name = nameof(SaveCommentInput);
           
            Field<NonNullGraphType<StringGraphType>>("Body");
            Field<NonNullGraphType<IntGraphType>>("AudioId");
            Field<IntGraphType>("OriginalCommentId");
        }
    }
}
