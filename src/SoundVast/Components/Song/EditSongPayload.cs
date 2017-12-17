using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Song
{
    public class EditSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;

        public EditSongPayload(ISongService songService)
        {
            _songService = songService;

            Name = nameof(EditSongPayload);
           
            Field<NonNullGraphType<SongPayload>>("song");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var songId = inputs.Get<int>("songId");
            var coverImageUrl = inputs.Get<string>("coverImageUrl");
            var name = inputs.Get<string>("name");
            var artist = inputs.Get<string>("artist");
            var free = inputs.Get<bool>("free");
            var genreId = inputs.Get<int>("genreId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var song = new Models.Song
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                Artist = artist,
                Free = free,
                GenreId = genreId,
                UserId = user.Id,
            };

            _songService.Edit(songId, song);

            return new
            {
                song
            };
        }
    }
}
