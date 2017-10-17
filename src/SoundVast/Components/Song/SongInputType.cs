using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace SoundVast.Components.Song
{
    public class SongInputType : InputObjectGraphType
    {
        public SongInputType()
        {
            Name = "SongInput";
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<StringGraphType>("Artist");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
            Field<NonNullGraphType<StringGraphType>>("UserId");
        }
    }
}
