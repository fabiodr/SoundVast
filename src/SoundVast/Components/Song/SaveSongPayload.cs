using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;

namespace SoundVast.Components.Song
{
    public class SaveSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;
        private static string GetUserId(ResolveFieldContext<object> context) => context.UserContext.As<Context>().ApplicationUser.Id;

        public SaveSongPayload(ISongService songService)
        {
            _songService = songService;

            Name = nameof(SaveSongPayload);
           
            Field<SongPayload>("song");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var coverImageUrl = inputs.Get<string>("coverImageUrl");
            var name = inputs.Get<string>("name");
            var artist = inputs.Get<string>("artist");
            var genreId = inputs.Get<int>("genreId");
            var song = new Models.Song
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                Artist = artist,
                GenreId = genreId,
                UserId = GetUserId(context),
            };

            _songService.Add(song);

            return new
            {
                song
            };
        }
    }
}
