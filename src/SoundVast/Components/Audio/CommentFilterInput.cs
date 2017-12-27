using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Builders;
using GraphQL.Types;

namespace SoundVast.Components.Audio
{
    public class CommentFilterInput : InputObjectGraphType
    {
        public CommentFilterInput()
        {
            Name = nameof(CommentFilterInput);

            Field<BooleanGraphType>("MostCommented");
            Field<IntGraphType>("From", "The days since to start filtering from");
            Field<IntGraphType>("To", "The days since to start filter to");
        }
    }
}
