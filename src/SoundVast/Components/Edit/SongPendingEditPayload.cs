﻿using GraphQL.Types;
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
using SoundVast.Components.Rating;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Edit
{
    public class SongPendingEditPayload : NodeGraphType<SongPendingEdit>
    {
        public SongPendingEditPayload()
        {
            Name = nameof(SongPendingEdit);

            Id("audioPendingEditId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The poster image for the song");
            Field(x => x.Artist, true);
            Field(x => x.Free);
            Field<AccountPayload>("contributor", "The user who requested the edit");
            Field<SongGenrePayload>("genre", "The genre the song belongs to");
            Field<SongPayload>("audio", "The original song that this edit is modifying");

            Interface<AudioPendingEditInterface>();
        }

        public override SongPendingEdit GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}