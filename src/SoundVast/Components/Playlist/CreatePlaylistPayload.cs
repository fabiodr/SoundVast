using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Playlist
{
    public class CreatePlaylstPayload : MutationPayloadGraphType
    {
        private readonly IPlaylistService _playlistService;
        private readonly ISongService _songService;

        public CreatePlaylstPayload(IPlaylistService playlistService, ISongService songService)
        {
            _playlistService = playlistService;
            _songService = songService;

            Name = nameof(CreatePlaylstPayload);

            Field<PlaylistPayload>("playlist");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var name = inputs.Get<string>("name");
            var songId = inputs.Get<int>("songId");
            var song = _songService.GetAudio(songId);
            var user = context.UserContext.As<Context>().CurrentUser;

            var playlist = new Models.Playlist
            {
                Name = name,
                User = user,
            };

            playlist.SongPlaylists.Add(new SongPlaylist
            {
                Song = song,
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
