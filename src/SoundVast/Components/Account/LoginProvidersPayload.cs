using GraphQL.Types;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using Microsoft.AspNetCore.Http.Authentication;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Account
{
    public class LoginProvidersPayload : ObjectGraphType<AuthenticationDescription>
    {
        public LoginProvidersPayload()
        {
            Name = "LoginProvider";

            Field(x => x.AuthenticationScheme);
            Field(x => x.DisplayName);
        }
    }
}
