using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.User;

namespace SoundVast.Components.Account
{
    public class AccountPayload : ObjectGraphType<ApplicationUser>
    {
        public AccountPayload()
        {
            Name = nameof(ApplicationUser);

            Field<IdGraphType>("Id");
            Field(x => x.UserName);
            Field(x => x.Email);
            Field(x => x.EmailConfirmed);
        }
    }
}
