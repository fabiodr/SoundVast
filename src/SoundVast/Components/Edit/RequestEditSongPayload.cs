using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Edit
{
    public class RequestEditSongPayload : MutationPayloadGraphType
    {
        private readonly ISongPendingEditService _songPendingEditService;

        public RequestEditSongPayload(ISongPendingEditService songPendingEditService)
        {
            _songPendingEditService = songPendingEditService;

            Name = nameof(RequestEditSongPayload);
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
            var model = new SongPendingEdit
            {
                AudioId = songId,
                CoverImageUrl = coverImageUrl,
                Name = name,
                Artist = artist,
                Free = free,
                GenreId = genreId,
                ContributorId = user.Id
            };

            _songPendingEditService.Add(model);

            return null;
        }
    }
}
