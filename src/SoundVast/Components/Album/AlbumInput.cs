using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Album
{
    public class AlbumInput : InputObjectGraphType
    {
        public AlbumInput()
        {
            Name = nameof(AlbumInput);

            Field<IntGraphType>("id", "The existing album id");
            Field<StringGraphType>("Album", "The name of the new album");
        }

        public int? Id { get; set; }
        public string Album { get; set; }
    }
}
