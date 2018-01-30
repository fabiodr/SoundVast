using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Album;
using SoundVast.Components.Artist;
using SoundVast.Components.Tag;

namespace SoundVast.Components.Song
{
    public class SaveSongInput : MutationInputGraphType
    {
        public SaveSongInput()
        {
            Name = nameof(SaveSongInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
            Field<ListGraphType<ArtistInput>>("Artists");
            Field<AlbumInput>("Album");
            Field<DateGraphType>("ReleaseDate");
            Field<BooleanGraphType>("Free");
            Field<ListGraphType<TagInput>>("Tags");
            Field<NonNullGraphType<StringGraphType>>("CoverImageUrl");
            Field<ListGraphType<IntGraphType>>("GenreIds");
        }
    }
}
