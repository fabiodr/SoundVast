using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Account;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio
{
    public class AudioInterface : InterfaceGraphType<Models.Audio>
    {
        public AudioInterface()
        {
            Name = nameof(Models.Audio);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("audioId");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the audio");
            Field(x => x.Likes);
            Field(x => x.Dislikes);
            Field(x => x.PlayCount);
            Field<DateGraphType>("uploadDate", "The upload date of the audio");
            Field<AccountPayload>("user", "The user who uploaded the audio");
            Field<GenrePayload>("genre", "The genre the audio belongs to");
            Field<ListGraphType<RatingPayload>>("ratings", "The ratings that have been applied by users to this audio");
            Connection<CommentPayload>()
                .Name("comments")
                .Argument<IntGraphType>("originalCommentId", "Get the replies for the original comment instead")
                .Description("The comments for the audio");
        }
    }
}
