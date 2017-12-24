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
    public class CreatePlaylstPayload : MutationPayloadGraphType
    {
        private readonly IPlaylistService _playlistService;

        public CreatePlaylstPayload(IPlaylistService playlistService)
        {
            _playlistService = playlistService;

            Name = nameof(CreatePlaylstPayload);

            Field<PlaylistPayload>("playlist");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var name = inputs.Get<string>("name");
            var songId = inputs.Get<int>("songId");
            var user = context.UserContext.As<Context>().CurrentUser;

            var playlist = new Models.Playlist
            {
                Name = name,
                User = user,
            };

            playlist.SongPlaylists.Add(new SongPlaylist
            {
                SongId = songId,
                User = user,
                Playlist = playlist
            });

            _playlistService.Add(playlist);

            return new
            {
                playlist
            };
        }
    }
}
