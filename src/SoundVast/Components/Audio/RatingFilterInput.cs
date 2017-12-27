using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Builders;
using GraphQL.Types;

namespace SoundVast.Components.Audio
{
    public class RatingFilterInput : InputObjectGraphType
    {
        public RatingFilterInput()
        {
            Name = nameof(RatingFilterInput);

            Field<BooleanGraphType>("TopRated");
            Field<IntGraphType>("MinimumNumberOfRatingsThreshold", "The minimum number of ratings that need to have been applied for this filter to have any effect");
            Field<IntGraphType>("From", "The days since to start filtering from");
            Field<IntGraphType>("To", "The days since to start filter to");
        }
    }
}
