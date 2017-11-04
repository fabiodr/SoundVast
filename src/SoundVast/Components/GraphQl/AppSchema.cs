using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Rating;
using SoundVast.Components.Song;

namespace SoundVast.Components.GraphQl
{
    public class AppSchema : Schema
    {
        public AppSchema(Func<Type, object> resolveType)
            : base(type => (GraphType)resolveType(type))
        {
            var query = resolveType(typeof(AppQuery));

            Query = query as AppQuery;
            Mutation = new AppMutation();

            RegisterType<SongPayload>();
            RegisterType<LiveStreamPayload>();
            RegisterType<GenreType>();
            RegisterType<RatingPayload>();
        }
    }
}
