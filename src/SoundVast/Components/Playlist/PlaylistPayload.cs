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
    public class PlaylistPayload : NodeGraphType<Models.Playlist>
    {
        public PlaylistPayload()
        {
            Name = nameof(Playlist);

            Id(x => x.Id);
            Field(x => x.Name).Description("The name that the user gave the playlist");
            Field<StringGraphType>("coverImageUrl",
                "The cover image url for the playlist. Set to the first song in it.",
                resolve: c => c.Source.SongPlaylists.Select(x => x.Song.CoverImageUrl).FirstOrDefault());
            Field<NonNullGraphType<AccountPayload>>("user", "The user who created the playlist");
            Connection<SongPlaylistPayload>().Name("songPlaylists").Description("The songs in the playlist.")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(c.Source.SongPlaylists, c));
        }

        public override Models.Playlist GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
