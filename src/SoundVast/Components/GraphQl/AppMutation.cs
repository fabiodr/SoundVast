﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Validation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Email;
using SoundVast.Components.Flag;
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
            Mutation<SaveLiveStreamInput, SaveLiveStreamPayload>("saveLiveStream").AddPermission(AuthorizedPermission);
            Mutation<RateInput, RateAudioPayload>("rateAudio").AddPermission(AuthorizedPermission);
            Mutation<RateInput, RateCommentPayload>("rateComment").AddPermission(AuthorizedPermission);
            Mutation<RegisterInput, RegisterPayload>("register");
            Mutation<LoginInput, LoginPayload>("login");
            Mutation<ExternalLoginConfirmationInput, ExternalLoginConfirmationPayload>("externalLoginConfirmation");
            Field<LogoutPayload>("logout", resolve: c => ((LogoutPayload)c.ReturnType).MutateAndGetPayload(null, c)).AddPermission(AuthorizedPermission);
            Mutation<SendEmailInput, SendEmailPayload>("sendEmail");
            Mutation<GenerateResetPasswordTokenInput, GenerateResetPasswordTokenPayload>("generateResetPasswordToken");
            Mutation<ResetPasswordInput, ResetPasswordPayload>("resetPassword");
            Mutation<SaveCommentInput, SaveCommentPayload>("comment").AddPermission(AuthorizedPermission);
            Mutation<FlagAudioInput, FlagObjectPayload>("flagAudio").AddPermission(AuthorizedPermission);
            Mutation<FlagCommentInput, FlagObjectPayload>("flagComment").AddPermission(AuthorizedPermission);
        }
    }
}
