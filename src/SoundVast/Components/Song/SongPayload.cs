using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Artist;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.GraphQl;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Song
{
    public class SongPayload : NodeGraphType<Models.Song>
    {
        private readonly ISongService _songService;

        public SongPayload(ISongService songService)
        {
            _songService = songService;

            Name = nameof(Models.Song);
            
            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the song");
            Field<ListGraphType<ArtistPayload>>("artists", resolve: c => c.Source.ArtistSongs.Select(x => x.Artist));
            Field(x => x.Free);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Field<DateGraphType>("dateAdded", "The date the user added the song");
            Field<DateGraphType>("releaseDate", "The date the song was released");
            Field<AccountPayload>("user", "The user who uploaded the song");
            Field<ListGraphType<SongGenrePayload>>("genres", "The genre the song belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this song");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the song")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return GraphQL.Relay.Types.Connection.ToConnection(comments, c);
                });

            Interface<AudioInterface>();
        }

        public override Models.Song GetById(string id)
        {
            return _songService.GetAudio(int.Parse(id));
        }
    }
}
