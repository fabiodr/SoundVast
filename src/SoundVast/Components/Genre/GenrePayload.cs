using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Genre
{
    public class GenrePayload : ObjectGraphType<Models.Genre>
    {
        public GenrePayload()
        {
            Name = nameof(Models.Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.Type).Description("The type of audio that this genre belongs to, e.g. Music, Radio etc");
            Field(x => x.CoverImageUrl).Description("The cover image url for this genre");
            Field<ListGraphType<AudioInterface>>("audios", "The audios that belong to this genre");
        }
    }
}
