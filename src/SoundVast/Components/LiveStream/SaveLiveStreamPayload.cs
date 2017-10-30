using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.LiveStream
{
    public class SaveLiveStreamPayload : MutationPayloadGraphType<LiveStreamPayload, Models.LiveStream>
    {
        private readonly ILiveStreamService _liveStreamService;
        private static string GetUserId(ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public SaveLiveStreamPayload(ILiveStreamService liveService)
        {
            _liveStreamService = liveService;

            Name = nameof(SaveLiveStreamInput);
           
            Field(
                name: "liveStream",
                type: typeof(Models.LiveStream)
            );
        }

        public override Models.LiveStream MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var liveStream = inputs.As<Models.LiveStream>();

            liveStream.UserId = GetUserId(context);
            _liveStreamService.Add(liveStream);

            return liveStream;
        }
    }
}
