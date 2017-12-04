﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
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
        public SongPayload(ICommentService commentService)
        {
            Name = nameof(Models.Song);

            Id("audioId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the song");
            Field(x => x.Artist, true);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field<UserPayload>("user", "The user who uploaded the song");
            Field<GenrePayload>("genre", "The genre the song belongs to");
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this song");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The comments for the song")
                .Resolve(c =>
                {
                    var audioId = c.Source.Id;

                    return GraphQL.Relay.Types.Connection.ToConnection(commentService.TopLevelComments(audioId), c);
            });

            Interface<AudioInterface>();
        }

        public override Models.Song GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}