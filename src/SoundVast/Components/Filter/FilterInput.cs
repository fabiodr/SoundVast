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

            Field<BooleanGraphType>("Newest", "Filter by date");
            Field<RatingFilterInput>("RatingFilter", "Filter by likes");
            Field<BooleanGraphType>("MostCommented", "Filter by comments");
            Field<BooleanGraphType>("MostPlayed", "Filter by plays");
            Field<DateGraphType>("DateFrom", "The start date to start filtering from");
            Field<DateGraphType>("DateTo", "The end date to end filtering to");
        }
    }
}
