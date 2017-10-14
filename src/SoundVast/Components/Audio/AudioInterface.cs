using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Audio
{
    public class AudioInterface : InterfaceGraphType<Models.Audio>
    {
        public AudioInterface()
        {
            Name = nameof(Models.Audio);

            Field(x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the audio");
            Field(x => x.UserId).Description("The user who uploaded the audio");
            Field<GenreType>().Description("The genre the audio belongs to");
        }
    }
}
