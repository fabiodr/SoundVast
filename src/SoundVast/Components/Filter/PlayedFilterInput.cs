using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Builders;
using GraphQL.Types;

namespace SoundVast.Components.Filter
{
    public class PlayedFilterInput : InputObjectGraphType
    {
        public PlayedFilterInput()
        {
            Name = nameof(PlayedFilterInput);

            Field<BooleanGraphType>("MostPlayed");
            Field<IntGraphType>("From", "The days since to start filtering from");
            Field<IntGraphType>("To", "The days since to start filter to");
        }
    }
}
