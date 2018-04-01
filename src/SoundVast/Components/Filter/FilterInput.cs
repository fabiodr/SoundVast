using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Builders;
using GraphQL.Types;

namespace SoundVast.Components.Filter
{
    public class FilterInput : InputObjectGraphType
    {
        public FilterInput()
        {
            Name = nameof(FilterInput);
            Description = "Provides filtering";

            Field<BooleanGraphType>("Newest", "Filter by newest");
        }
    }
}
