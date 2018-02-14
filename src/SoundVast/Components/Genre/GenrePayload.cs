using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream;

namespace SoundVast.Components.Genre
{
    public class GenrePayload : ObjectGraphType<Models.Genre>
    {
        public GenrePayload()
        {
            Name = nameof(Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The cover image url for this genre");
        }
    }
}
