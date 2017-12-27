using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Playlist
{
    public class CreatePlaylistInput : MutationInputGraphType
    {
        public CreatePlaylistInput()
        {
            Name = nameof(CreatePlaylistInput);
           
            Field<NonNullGraphType<StringGraphType>>("Name");
        }
    }
}
