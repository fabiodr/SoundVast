using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RatingType : ObjectGraphType<Models.Rating>
    {
        public RatingType()
        {
            Name = nameof(Models.Rating);

            Field<IdGraphType>("id");
            Field(x => x.Liked).Description("Whether the user has liked the audio or not");
            Field<UserType>("user", "The user that rated the audio");
            Field<AudioInterface>("audio", "The audio that was rated by the user");
        }
    }
}
