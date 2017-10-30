using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Rating
{
    public class RateAudioInput : MutationInputGraphType
    {
        public RateAudioInput()
        {
            Name = nameof(RateAudioInput);

            Field<NonNullGraphType<IntGraphType>>("AudioId");
            Field<NonNullGraphType<BooleanGraphType>>("Liked");
        }
    }
}
