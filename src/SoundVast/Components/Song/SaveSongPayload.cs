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
    public class SaveSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;

        public SaveSongPayload(ISongService songService)
        {
            _songService = songService;

            Name = nameof(SaveSongPayload);
           
            Field<NonNullGraphType<SongPayload>>("song");
            Field<NonNullGraphType<IntGraphType>>("contributionPoints",
                "The amount of contribution points the user earns from uploading a song",
                resolve: c => (int)Contribution.Upload);
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
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

            _songService.Add(song);

            return new
            {
                song
            };
        }
    }
}
