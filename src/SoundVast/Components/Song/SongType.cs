using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Song
{
    public class SongType : ObjectGraphType<Models.Song>
    {
        public SongType()
        {
            Name = nameof(Models.Song);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the song");
            Field(x => x.Artist, true);
            Field<UserType>("user", "The user who uploaded the song");
            Field<GenreType>("genre", "The genre the song belongs to");
            Field<ListGraphType<RatingType>>("ratings", "The ratings that have been applied by users to this song");

            Interface<AudioInterface>();
        }
    }
}
