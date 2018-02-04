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
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.GraphQl;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Rating;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Edit
{
    public class LiveStreamPendingEditPayload : NodeGraphType<LiveStreamPendingEdit>
    {
        public LiveStreamPendingEditPayload()
        {
            Name = nameof(LiveStreamPendingEdit);

            Id("audioPendingEditId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the live stream");
            Field(x => x.LiveStreamUrl);
            Field<AccountPayload>("contributor", "The user who requested the edit");
            Field<GenrePayload>("genre", "The genre the live stream belongs to");
            Field<LiveStreamPayload>("audio", "The original live stream that this edit is modifying");

            Interface<AudioPendingEditInterface>();
        }

        public override LiveStreamPendingEdit GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
