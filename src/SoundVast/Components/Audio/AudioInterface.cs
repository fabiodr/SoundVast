﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Account;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Audio
{
    public class AudioInterface : InterfaceGraphType<Models.Audio>
    {
        public AudioInterface(ICloudStorage cloudStorage)
        {
            Name = nameof(Models.Audio);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("audioId");
            Field(x => x.Name);
            Field<StringGraphType>("coverImageUrl", "The cover image url for the audio", 
                resolve: c => cloudStorage.GetBlob(CloudStorageType.Image, c.Source.CoverImageName).Uri.AbsoluteUri);
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Field<DateGraphType>("dateAdded", "The date the user added the audio");
            Field<AccountPayload>("user", "The user who uploaded the audio");
            Field<ListGraphType<GenrePayload>>("genres", "The genres the audio belongs to", resolve: c => c.Source.AudioGenres.Select(x => x.Genre));
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this audio");
            Connection<CommentPayload>()
                .Name("comments")
                .Description("The top level comments for the audio")
                .Resolve(c =>
                {
                    var comments = c.Source.Comments.Where(x => x.IsTopLevelComment);

                    return GraphQL.Relay.Types.Connection.ToConnection(comments, c);
                });
        }
    }
}
