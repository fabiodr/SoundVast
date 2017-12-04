using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Audio;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RateCommentPayload : MutationPayloadGraphType
    {
        private readonly IRatingService<Comment.Models.Comment> _ratingService;

        public RateCommentPayload(IRatingService<Comment.Models.Comment> ratingService)
        {
            _ratingService = ratingService;

            Name = nameof(RateAudioPayload);
           
            Field<RatingPayload>("rating");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var liked = inputs.Get<bool>("liked");
            var user = context.UserContext.As<Context>().CurrentUser;
            var rating = _ratingService.Rate(id, user.Id, liked);

            return new
            {
                rating
            };
        }
    }
}
