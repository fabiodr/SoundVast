using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using SoundVast.Components.Audio;
using SoundVast.Components.Edit.Models;

namespace SoundVast.Components.Genre
{
    public class GenreInterface : InterfaceGraphType<Models.Genre>
    {
        public GenreInterface()
        {
            Name = nameof(Models.Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The cover image url for this genre");
        }
    }
}
