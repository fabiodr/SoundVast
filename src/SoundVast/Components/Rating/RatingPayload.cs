using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Audio;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RatingPayload : ObjectGraphType<Models.Rating>
    {
        public RatingPayload()
        {
            Name = nameof(Models.Rating);

            Field<IdGraphType>("id");
            Field(x => x.Liked).Description("Whether the user has liked the audio or not");
            Field<UserType>("user", "The user that rated the audio");
            Field<AudioInterface>("audio", "The audio that was rated by the user");
        }
    }
}
