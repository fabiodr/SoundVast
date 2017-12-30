using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Artist
{
    public class ArtistPayload : NodeGraphType<Models.Artist>
    {
        public ArtistPayload()
        {
            Name = nameof(Models.Artist);

            Id(x => x.Id);
            Field(x => x.Name);
            Field(x => x.CoverImageUrl);
        }

        public override Models.Artist GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
