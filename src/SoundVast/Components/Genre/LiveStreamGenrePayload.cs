using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream;
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Genre
{
    public class LiveStreamGenrePayload : ObjectGraphType<LiveStreamGenre>
    {
        public LiveStreamGenrePayload()
        {
            Name = nameof(LiveStreamGenre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field(x => x.CoverImageUrl).Description("The cover image url for this genre");
            Connection<LiveStreamPayload>().Name("liveStreams").Description("The live streams that belong to this genre");

            Interface<GenreInterface>();
        }
    }
}
