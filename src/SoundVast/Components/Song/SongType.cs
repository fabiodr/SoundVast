using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Song
{
    public class SongType : ObjectGraphType<Models.Song>
    {
        public SongType()
        {
            Name = nameof(Models.Song);

            //Field(x => x.Id);
            Field(x => x.Name);
            //Field(x => x.CoverImageUrl).Description("The poster image for the song");
            //Field(x => x.Artist, true);
            //Field(x => x.UserId).Description("The user who uploaded the song");
            //Field<GenreType>().Description("The genre the song belongs to");

            //Interface<AudioInterface>();
        }
    }
}
