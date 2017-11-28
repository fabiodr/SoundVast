using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Account
{
    public class GenerateResetPasswordTokenInput : MutationInputGraphType
    {
        public GenerateResetPasswordTokenInput()
        {
            Name = nameof(GenerateResetPasswordTokenInput);

            Field<NonNullGraphType<StringGraphType>>("Email");
        }
    }
}
