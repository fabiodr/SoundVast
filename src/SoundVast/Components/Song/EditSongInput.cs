using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Song
{
    public class EditSongInput : MutationInputGraphType
    {
        public EditSongInput()
        {
            Name = nameof(EditSongInput);

            Field<NonNullGraphType<IntGraphType>>("SongId");
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<StringGraphType>("Artist");
            Field<NonNullGraphType<BooleanGraphType>>("Free");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
        }
    }
}
