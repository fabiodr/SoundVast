using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Album;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Artist
{
    public class ArtistPayload : NodeGraphType<Models.Artist>
    {
        public ArtistPayload(ICommentService commentService)
        {
            Name = nameof(Models.Artist);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the artist");
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Connection<SongPayload>()
                .Name("songs")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(c.Source.ArtistSongs.Select(x => x.Song), c));
            Connection<AlbumPayload>()
                .Name("albums")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(c.Source.ArtistAlbums.Select(x => x.Album), c));
            Field<DateGraphType>("dateAdded", "The date the user added the artist");
            Field<AccountPayload>("user", "The user who added the artist");
            Field<ListGraphType<SongGenrePayload>>("genres", "The genres the artist belongs to");
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this artist");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the artist");

            Interface<AudioInterface>();
        }

        public override Models.Artist GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
