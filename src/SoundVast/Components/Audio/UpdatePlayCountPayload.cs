using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio
{
    public class UpdatePlayCountPayload : MutationPayloadGraphType
    {
        private readonly IAudioService<Models.Audio> _audioService;

        public UpdatePlayCountPayload(IAudioService<Models.Audio> audioService)
        {
            _audioService = audioService;

            Name = nameof(UpdatePlayCountPayload);
           
            Field<NonNullGraphType<AudioInterface>>("audio");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var audioId = inputs.Get<int>("audioId");
            var audio = _audioService.UpdatePlayCount(audioId);

            return new
            {
                audio
            };
        }
    }
}
