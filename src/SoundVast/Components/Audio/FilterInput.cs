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
            Field<RatingFilterInput>("RatingFilter", "Filter by likes");
            Field<CommentFilterInput>("CommentFilter", "Filter by comments");
            Field<PlayedFilterInput>("PlayedFilter", "Filter by plays");
        }
    }
}
