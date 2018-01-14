using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RatingPayload : NodeGraphType<Models.Rating>
    {
        private readonly IRatingService _ratingService;

        public RatingPayload(IRatingService ratingService)
        {
            _ratingService = ratingService;

            Name = nameof(Models.Rating);

            Id(x => x.Id);
            Field(x => x.Liked).Description("Whether the user has liked the audio or not");
            Field<AccountPayload>("user", "The user that rated the audio");
            Field<AudioInterface>("audio", "The audio that was rated by the user");
            Field<CommentPayload>("comment", "The comment that was rated by the user");
        }

        public override Models.Rating GetById(string id)
        {
            return _ratingService.Get(int.Parse(id));
        }
    }
}
