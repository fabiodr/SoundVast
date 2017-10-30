using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.LiveStream
{
    public class SaveLiveStreamInput : MutationInputGraphType
    {
        public SaveLiveStreamInput()
        {
            Name = nameof(SaveLiveStreamInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<NonNullGraphType<StringGraphType>>("LiveStreamUrl");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
        }
    }
}
