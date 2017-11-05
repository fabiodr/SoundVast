using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Account
{
    public class LoginAccountInput : MutationInputGraphType
    {
        public LoginAccountInput()
        {
            Name = nameof(LoginAccountInput);

            Field<NonNullGraphType<StringGraphType>>("Username");
            Field<NonNullGraphType<StringGraphType>>("Password");
            Field<BooleanGraphType>("RememberMe");
        }
    }
}
