﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio
{
    public class AudioInterface : InterfaceGraphType<Models.Audio>
    {
        public AudioInterface()
        {
            Name = nameof(Models.Audio);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the audio");
            Field<UserType>("user", "The user who uploaded the audio");
            Field<GenreType>("genre", "The genre the audio belongs to");
            Field<ListGraphType<RatingType>>("ratings", "The ratings that have been applied by users to this audio");
        }
    }
}
