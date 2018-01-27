using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Artist;

namespace SoundVast.Components.Edit
{
    public class RequestEditSongInput : MutationInputGraphType
    {
        public RequestEditSongInput()
        {
            Name = nameof(RequestEditSongInput);

            Field<NonNullGraphType<IntGraphType>>("SongId");
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<ListGraphType<ArtistInput>>("Artists");
            Field<StringGraphType>("Album");
            Field<IntGraphType>("AlbumId", "The existing albums id");
            Field<NonNullGraphType<BooleanGraphType>>("Free");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<IntGraphType>("GenreId");
        }
    }
}
