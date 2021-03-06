﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating
{
    public class RateCommentPayload : MutationPayloadGraphType
    {
        private readonly ICommentService _commentService;

        public RateCommentPayload(ICommentService commentService)
        {
            _commentService = commentService;

            Name = nameof(RateAudioPayload);
           
            Field<RatingPayload>("rating");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var liked = inputs.Get<bool>("liked");
            var user = context.UserContext.As<Context>().CurrentUser;
            var rating = _commentService.Rate(id, user.Id, liked);

            return new
            {
                rating
            };
        }
    }
}
