using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Edit
{
    public class AudioPendingEditInterface : InterfaceGraphType<AudioPendingEdit>
    {
        public AudioPendingEditInterface()
        {
            Name = nameof(AudioPendingEdit);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("audioPendingEditId");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the audio");
            Field<AccountPayload>("contributor", "The user who requested the edit");
            Field<GenrePayload>("genre", "The genre the audio belongs to");
            Field<AudioInterface>("audio", "The original audio that this edit is modifying");
        }
    }
}
