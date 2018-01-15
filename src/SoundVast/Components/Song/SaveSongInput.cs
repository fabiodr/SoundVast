using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Artist;

namespace SoundVast.Components.Song
{
    public class SaveSongInput : MutationInputGraphType
    {
        public SaveSongInput()
        {
            Name = nameof(SaveSongInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<ListGraphType<ArtistInput>>("Artists");
            Field<StringGraphType>("Album");
            Field<IntGraphType>("AlbumId", "The existing albums id");
            Field<DateGraphType>("ReleaseDate");
            Field<BooleanGraphType>("Free");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<ListGraphType<IntGraphType>>("GenreIds");
        }
    }
}
