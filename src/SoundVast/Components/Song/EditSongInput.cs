using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Song
{
    public class EditSongInput : MutationInputGraphType
    {
        public EditSongInput()
        {
            Name = nameof(EditSongInput);

            Field<NonNullGraphType<IntGraphType>>("PendingSongId");
            Field<NonNullGraphType<BooleanGraphType>>("EditAccepted");
        }
    }
}
