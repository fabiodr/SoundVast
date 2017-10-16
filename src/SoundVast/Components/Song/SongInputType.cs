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
           
            Field<NonNullGraphType<StringGraphType>>("AudioName");
            Field<NonNullGraphType<StringGraphType>>("AudioPath");
            Field<NonNullGraphType<IntGraphType>>("FileLength");
            Field<NonNullGraphType<StringGraphType>>("ProgressId");
        }
    }
}
