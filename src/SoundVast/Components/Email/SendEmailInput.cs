using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Email
{
    public class SendEmailInput : MutationInputGraphType
    {
        public SendEmailInput()
        {
            Name = nameof(SendEmailInput);

            Field<NonNullGraphType<StringGraphType>>("Email");
            Field<NonNullGraphType<StringGraphType>>("Message");
            Field<NonNullGraphType<StringGraphType>>("Subject");
        }
    }
}
