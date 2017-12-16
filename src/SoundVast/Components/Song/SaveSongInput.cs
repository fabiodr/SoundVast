using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Song
{
    public class SaveSongInput : MutationInputGraphType
    {
        public SaveSongInput()
        {
            Name = nameof(SaveSongInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<StringGraphType>("Artist");
            Field<BooleanGraphType>("Free");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
        }
    }
}
