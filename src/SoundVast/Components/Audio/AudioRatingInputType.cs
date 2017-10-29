using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace SoundVast.Components.Audio
{
    public class AudioRatingInputType : InputObjectGraphType
    {
        public AudioRatingInputType()
        {
            Name = "AudioRatingInput";

            Field<NonNullGraphType<IntGraphType>>("AudioId");
            Field<NonNullGraphType<BooleanGraphType>>("Liked");
        }
    }
}
