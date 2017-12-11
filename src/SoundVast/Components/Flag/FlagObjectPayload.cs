using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Audio;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.Flag
{
    public class FlagObjectPayload : MutationPayloadGraphType
    {
        private readonly IFlagService _flagService;

        public FlagObjectPayload(IFlagService flagService)
        {
            _flagService = flagService;

            Name = nameof(FlagObjectPayload);
           
            Field<FlagPayload>("flag");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var audioId = inputs.Get<int>("audioId");
            var commentId = inputs.Get<int>("commentId");
            var reason = inputs.Get<string>("reason");
            var additionalDetails = inputs.Get<string>("additionalDetails");

            var flag = new Models.Flag
            {
                AudioId = audioId,
                CommentId = commentId,
                Reason = reason,
                AdditionalDetails = additionalDetails,
            };

            _flagService.Add(flag);

            return new
            {
                flag
            };
        }
    }
}
