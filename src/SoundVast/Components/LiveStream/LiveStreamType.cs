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

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamType : ObjectGraphType<Models.LiveStream>
    {
        public LiveStreamType()
        {
            Name = nameof(Models.LiveStream);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the live stream");
            Field(x => x.LiveStreamUrl);
            Field<UserType>("user", "The user who uploaded the live stream");
            Field<GenreType>("genre", "The genre the live stream belongs to");
            Field<ListGraphType<RatingType>>("ratings", "The ratings that have been applied by users to this live stream");

            Interface<AudioInterface>();
        }
    }
}
