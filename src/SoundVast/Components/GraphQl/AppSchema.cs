using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Rating;

namespace SoundVast.Components.GraphQl
{
    public class AppSchema : Schema
    {
        public AppSchema(Func<Type, IGraphType> resolveType) : base(resolveType)
        {
            var query = (AppQuery)resolveType(typeof(AppQuery));
            var mutation = (AppMutation)resolveType(typeof(AppMutation));
            var subscription = (AppSubscription)resolveType(typeof(AppSubscription));

            Query = query;
            Mutation = mutation;
            Subscription = subscription;
        }
    }
}
