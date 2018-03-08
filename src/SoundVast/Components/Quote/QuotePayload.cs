using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;

namespace SoundVast.Components.Quote
{
    public class QuotePayload : GraphQL.Relay.Types.Temp.NodeGraphType<Models.Quote>
    {
        public QuotePayload()
        {
            Name = nameof(Models.Quote);

            Id(x => x.Id);
            Field(x => x.Quotation);
        }

        public override Models.Quote GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
