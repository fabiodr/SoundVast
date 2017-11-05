using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Song;
using SoundVast.Validation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Email;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Rating;
using SoundVast.Components.Upload;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class AppMutation : MutationGraphType
    {
        private const string AuthorizedPermission = "Authorized";

        public AppMutation()
        {
            Mutation<SaveSongInput, SaveSongPayload>("saveSong").AddPermission(AuthorizedPermission);
            Mutation<SaveLiveStreamInput, SaveLiveStreamPayload>("saveLiveStream").AddPermission(AuthorizedPermission);
            Mutation<RateAudioInput, RateAudioPayload>("rateAudio").AddPermission(AuthorizedPermission);
            Mutation<RegisterAccountInput, RegisterAccountPayload>("register");
            Mutation<LoginAccountInput, LoginAccountPayload>("login");
            Mutation<SendEmailInput, SendEmailPayload>("sendEmail");
        }
    }
}
