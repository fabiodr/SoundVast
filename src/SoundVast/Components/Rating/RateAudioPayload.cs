using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Audio;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.Rating
{
    public class RateAudioPayload : MutationPayloadGraphType
    {
        private readonly IAudioService<Audio.Models.Audio> _audioService;
        private static string GetUserId(ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public RateAudioPayload(IAudioService<Audio.Models.Audio> audioService)
        {
            _audioService = audioService;

            Name = nameof(RateAudioPayload);
           
            Field<RatingPayload>("rating");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var audioId = inputs.Get<int>("audioId");
            var liked = inputs.Get<bool>("liked");
            var userId = GetUserId(context);

            var rating = _audioService.RateAudio(audioId, userId, liked);

            return new
            {
                rating
            };
        }
    }
}
