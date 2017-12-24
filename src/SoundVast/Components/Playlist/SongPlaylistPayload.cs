using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Playlist
{
    public class SongPlaylistPayload : NodeGraphType<SongPlaylist>
    {
        public SongPlaylistPayload()
        {
            Name = nameof(SongPlaylist);

            Id(x => x.Id);
            Field<PlaylistPayload>("playlist", "The playlist for this song");
            Field<SongPayload>("song", "The song in this playlist");
            Field<AccountPayload>("user", "The user who created this playlist");
        }

        public override SongPlaylist GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
