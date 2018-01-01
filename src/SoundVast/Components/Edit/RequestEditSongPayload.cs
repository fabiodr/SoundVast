using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Edit
{
    public class RequestEditSongPayload : MutationPayloadGraphType
    {
        private readonly ISongPendingEditService _songPendingEditService;
        private readonly ICloudStorage _cloudStorage;

        public RequestEditSongPayload(ISongPendingEditService songPendingEditService, ICloudStorage cloudStorage)
        {
            _songPendingEditService = songPendingEditService;
            _cloudStorage = cloudStorage;

            Name = nameof(RequestEditSongPayload);
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var songId = inputs.Get<int>("songId");
            var coverImageUrl = inputs.Get<string>("coverImageUrl");
            var name = inputs.Get<string>("name");
            var artists = inputs.Get<IEnumerable<string>>("artists");
            var artistsId = inputs.Get<IEnumerable<int>>("artistsId");
            var album = inputs.Get<string>("album");
            var albumId = inputs.Get<int>("albumId");
            var free = inputs.Get<bool>("free");
            var genreId = inputs.Get<int>("genreId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            var songPendingEdit = new SongPendingEdit
            {
                AudioId = songId,
                CoverImageUrl = coverImageUrl,
                Name = name,
                Free = free,
                GenreId = genreId,
                ContributorId = user.Id,
                AlbumId = albumId
            };

            if (album != null)
            {
                songPendingEdit.Album = new Album.Models.Album
                {
                    Name = album,
                    CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                };
            }

            foreach (var artistId in artistsId)
            {
                songPendingEdit.ArtistSongs.Add(new ArtistSong
                {
                    SongId = songId,
                    ArtistId = artistId
                });
            }

            foreach (var artist in artists)
            {
                var artistModel = new Artist.Models.Artist
                {
                    Name = artist,
                    CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                };

                artistModel.ArtistSongGenres.Add(new ArtistSongGenre
                {
                    Artist = artistModel,
                    SongGenreId = genreId
                });

                songPendingEdit.ArtistSongs.Add(new ArtistSong
                {
                    SongId = songId,
                    Artist = artistModel
                });
            }

            _songPendingEditService.Add(songPendingEdit);

            return null;
        }
    }
}
