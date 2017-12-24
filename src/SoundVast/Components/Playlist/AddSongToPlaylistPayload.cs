using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Playlist
{
    public class AddSongToPlaylistPayload : MutationPayloadGraphType
    {
        private readonly IPlaylistService _playlistService;

        public AddSongToPlaylistPayload(IPlaylistService playlistService)
        {
            _playlistService = playlistService;

            Name = nameof(AddSongToPlaylistPayload);
            
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var playlistId = inputs.Get<int>("PlaylistId");
            var songId = inputs.Get<int>("SongId");
            var user = context.UserContext.As<Context>().CurrentUser;

            var songPlaylist = new SongPlaylist
            {
                PlaylistId = playlistId,
                UserId = user.Id,
                SongId = songId
            };

            _playlistService.AddToPlaylist(songPlaylist);

            return new
            {
                playlist = songPlaylist.Playlist
            };
        }
    }
}
