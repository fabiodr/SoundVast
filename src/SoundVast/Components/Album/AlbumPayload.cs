using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Artist;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Album
{
    public class AlbumPayload : NodeGraphType<Models.Album>
    {
        public AlbumPayload(ICommentService commentService)
        {
            Name = nameof(Models.Album);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the album");
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Connection<SongPayload>()
                .Name("songs")
                .Resolve(c => GraphQL.Relay.Types.Connection.ToConnection(c.Source.Songs, c));
            Connection<ArtistPayload>()
                .Name("artists")
                .Description("The artists who worked on this album")
                .Resolve(c => c.Source.ArtistAlbums.Select(x => x.Artist));
            Field<DateGraphType>("dateAdded", "The date the user added the album");
            Field<AccountPayload>("user", "The user who added the album");
            Field<ListGraphType<GenrePayload>>("genres", "The genres the album belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this album");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the album")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return GraphQL.Relay.Types.Connection.ToConnection(comments, c);
                });

            Interface<AudioInterface>();
        }

        public override Models.Album GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
