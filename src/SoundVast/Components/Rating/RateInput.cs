using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Rating
{
    public class RateInput : MutationInputGraphType
    {
        public RateInput()
        {
            Name = nameof(RateInput);

            Field<NonNullGraphType<IntGraphType>>("Id");
            Field<NonNullGraphType<BooleanGraphType>>("Liked");
        }
    }
}
