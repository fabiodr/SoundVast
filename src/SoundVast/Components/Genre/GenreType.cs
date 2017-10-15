using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Genre
{
    public class GenreType : ObjectGraphType<Models.Genre>
    {
        public GenreType()
        {
            Name = nameof(Models.Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.Type).Description("The type of category the genre belongs to, e.g. Music, Radio etc");
        }
    }
}
