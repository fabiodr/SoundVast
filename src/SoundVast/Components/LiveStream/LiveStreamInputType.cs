using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamInputType : InputObjectGraphType
    {
        public LiveStreamInputType()
        {
            Name = "LiveStreamInput";
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<NonNullGraphType<StringGraphType>>("LiveStreamUrl");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
        }
    }
}
