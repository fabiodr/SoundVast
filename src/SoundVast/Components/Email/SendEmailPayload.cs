using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Audio;
using SoundVast.Components.GraphQl;
using SoundVast.Services;

namespace SoundVast.Components.Email
{
    public class SendEmailPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly IEmailSender _emailSender;

        public SendEmailPayload(IEmailSender emailSender)
        {
            _emailSender = emailSender;

            Name = nameof(SendEmailPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var email = inputs.Get<string>("email");
            var subject = inputs.Get<string>("subject");
            var message = inputs.Get<string>("message");

            await _emailSender.SendEmailAsync(email, subject, message);

            return null;
        }
    }
}
