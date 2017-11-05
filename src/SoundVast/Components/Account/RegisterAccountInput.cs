using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Account
{
    public class RegisterAccountInput : MutationInputGraphType
    {
        public RegisterAccountInput()
        {
            Name = nameof(RegisterAccountInput);

            Field<NonNullGraphType<StringGraphType>>("Username");
            Field<NonNullGraphType<StringGraphType>>("Email");
            Field<NonNullGraphType<StringGraphType>>("Password");
        }
    }
}
