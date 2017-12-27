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
    public class AddSongToPlaylistPayload : MutationPayloadGraphType
    {
        private readonly IPlaylistService _playlistService;
        private readonly ISongService _songService;

        public AddSongToPlaylistPayload(IPlaylistService playlistService, ISongService songService)
        {
            _playlistService = playlistService;
            _songService = songService;

            Name = nameof(AddSongToPlaylistPayload);

            Field<PlaylistPayload>("playlist");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var playlistId = inputs.Get<int>("playlistId");
            var songId = inputs.Get<int>("songId");
            var playlist = _playlistService.GetPlaylist(playlistId);
            var song = _songService.GetAudio(songId);
            var user = context.UserContext.As<Context>().CurrentUser;

            var songPlaylist = new SongPlaylist
            {
                Playlist = playlist,
                User = user,
                Song = song
            };

            _playlistService.AddToPlaylist(songPlaylist);

            return new
            {
                playlist = songPlaylist.Playlist
            };
        }
    }
}
