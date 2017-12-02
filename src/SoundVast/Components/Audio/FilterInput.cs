using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Builders;
using GraphQL.Types;

namespace SoundVast.Components.Audio
{
    public class FilterInput : InputObjectGraphType
    {
        public FilterInput()
        {
            Name = nameof(FilterInput);
            Description = "Provides filtering";

            Field<BooleanGraphType>("Newest", "Filter by date added");
            Field<IntGraphType>("TopRatedDays", "Filter by likes for the number of days specified");
            Field<IntGraphType>("MostCommentedDays", "Filter by comments for the number of days specified");
            Field<IntGraphType>("MostPlayedDays", "Filter by plays for the number of days specified");
        }
    }
}
