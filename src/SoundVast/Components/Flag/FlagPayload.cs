using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Account;
using SoundVast.Components.Audio;
using SoundVast.Components.Comment;
using SoundVast.Components.Genre;
using SoundVast.Components.GraphQl;
using SoundVast.Components.Rating;
using SoundVast.Components.User;

namespace SoundVast.Components.Flag
{
    public class FlagPayload : GraphQL.Relay.Types.Temp.NodeGraphType<Models.Flag>
    {
        public FlagPayload()
        {
            Name = nameof(Models.Flag);

            Id(x => x.Id);
            Field(x => x.AdditionalDetails).Description("Any additional details for why the user flagged");
            Field(x => x.Reason).Description("The reason why the user flagged");
            Field<AudioInterface>("audio", "The audio that the user flagged");
            Field<CommentPayload>("comment", "The comment that the user flagged");
        }

        public override Models.Flag GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
