using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Edit;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;

namespace SoundVast.Components.Song
{
    public class EditSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;
        private readonly ISongPendingEditService _songPendingEditService;

        public EditSongPayload(ISongService songService, ISongPendingEditService songPendingEditService)
        {
            _songService = songService;
            _songPendingEditService = songPendingEditService;

            Name = nameof(EditSongPayload);
           
            Field<NonNullGraphType<SongPayload>>("song");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var pendingSongId = inputs.Get<int>("pendingSongId");
            var editAccepted = inputs.Get<bool>("editAccepted");
            var songPendingEdit = _songPendingEditService.Get(pendingSongId);
            Models.Song song = null;

            if (editAccepted)
            {
                var newModel = new Models.Song
                {
                    CoverImageUrl = songPendingEdit.CoverImageUrl,
                    Name = songPendingEdit.Name,
                    ArtistSongs = songPendingEdit.ArtistSongs,
                    Free = songPendingEdit.Free,
                };

                newModel.Contributors.Add(songPendingEdit.Contributor);

                song = _songService.Edit(songPendingEdit.AudioId, newModel);
            }
            else
            {
                _songPendingEditService.Delete(songPendingEdit);
            }

            return new
            {
                song
            };
        }
    }
}
