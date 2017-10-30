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
    public class RateAudioPayload : MutationPayloadGraphType<RatingPayload, Models.Rating>
    {
        private readonly IAudioService<Audio.Models.Audio> _audioService;
        private static string GetUserId(ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public RateAudioPayload(IAudioService<Audio.Models.Audio> audioService)
        {
            _audioService = audioService;

            Name = nameof(RateAudioPayload);
           
            Field(
                name: "rating",
                type: typeof(Models.Rating)
            );
        }

        public override Models.Rating MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var audioRating = inputs.As<Models.Rating>();

            audioRating.UserId = GetUserId(context);
            _audioService.RateAudio(audioRating);

            return audioRating;
        }
    }
}
