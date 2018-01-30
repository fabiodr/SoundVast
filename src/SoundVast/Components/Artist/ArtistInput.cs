using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Artist
{
    public class ArtistInput : InputObjectGraphType
    {
        public ArtistInput()
        {
            Name = nameof(ArtistInput);

            Field<IntGraphType>("id", "The existing artist id");
            Field<StringGraphType>("Artist", "The name of the new artist");
        }

        public int? Id { get; set; }
        public string Artist { get; set; }
    }
}
