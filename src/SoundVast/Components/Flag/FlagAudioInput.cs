using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Flag
{
    public class FlagAudioInput : MutationInputGraphType
    {
        public FlagAudioInput()
        {
            Name = nameof(FlagAudioInput);
           
            Field<NonNullGraphType<IntGraphType>>("AudioId");
            Field<NonNullGraphType<StringGraphType>>("Reason");
            Field<StringGraphType>("AdditionalDetails");
        }
    }
}
