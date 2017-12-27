using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Audio
{
    public class UpdatePlayCountInput : MutationInputGraphType
    {
        public UpdatePlayCountInput()
        {
            Name = nameof(UpdatePlayCountInput);
           
            Field<NonNullGraphType<IntGraphType>>("audioId");
        }
    }
}
