using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using GraphQL.Types;

namespace SoundVast.Components.Song
{
    public class SongSchema : Schema
    {
        public SongSchema(IComponentContext container)
        {
            Query = container.Resolve<SongQuery>();
            Mutation = container.Resolve<SongMutation>();
        }
    }
}
