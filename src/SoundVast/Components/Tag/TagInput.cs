using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace SoundVast.Components.Tag
{
    public class TagInput : InputObjectGraphType
    {
        public TagInput()
        {
            Name = nameof(TagInput);

            Field<IntGraphType>("id", "The existing tag id");
            Field<StringGraphType>("Tag", "The name of the new tag");
        }

        public int? Id { get; set; }
        public string Tag { get; set; }
    }
}
