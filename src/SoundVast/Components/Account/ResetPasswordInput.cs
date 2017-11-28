using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Account
{
    public class ResetPasswordInput : MutationInputGraphType
    {
        public ResetPasswordInput()
        {
            Name = nameof(ResetPasswordInput);

            Field<NonNullGraphType<StringGraphType>>("Password");
            Field<NonNullGraphType<StringGraphType>>("UserId");
            Field<NonNullGraphType<StringGraphType>>("Token");
        }
    }
}
