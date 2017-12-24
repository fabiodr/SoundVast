using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Playlist
{
    public class AddSongToPlaylistInput : MutationInputGraphType
    {
        public AddSongToPlaylistInput()
        {
            Name = nameof(AddSongToPlaylistInput);
           
            Field<NonNullGraphType<IntGraphType>>("PlaylistId");
            Field<NonNullGraphType<IntGraphType>>("SongId");
        }
    }
}
