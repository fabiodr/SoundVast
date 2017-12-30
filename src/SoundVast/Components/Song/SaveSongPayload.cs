using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Album;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Song
{
    public class SaveSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;
        private readonly ICloudStorage _cloudStorage;

        public SaveSongPayload(ISongService songService, ICloudStorage cloudStorage)
        {
            _songService = songService;
            _cloudStorage = cloudStorage;

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
            var artists = inputs.Get<IEnumerable<string>>("artists");
            var artistsId = inputs.Get<IEnumerable<int>>("artistsId");
            var album = inputs.Get<string>("album");
            var albumId = inputs.Get<int>("albumId");
            var free = inputs.Get<bool>("free");
            var genreId = inputs.Get<int>("genreId");
            var user = context.UserContext.As<Context>().CurrentUser;
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            var song = new Models.Song
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                Free = free,
                GenreId = genreId,
                UserId = user.Id,
                AlbumId = albumId
            };

            if (album != null)
            {
                song.Album = new Album.Models.Album
                {
                    Name = album,
                    CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                };
            }

            foreach (var artistId in artistsId)
            {
                song.ArtistSongs.Add(new ArtistSong
                {
                    Song = song,
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

                artistModel.ArtistGenres.Add(new ArtistGenre
                {
                    Artist = artistModel,
                    SongGenreId = genreId
                });

                song.ArtistSongs.Add(new ArtistSong
                {
                    Song = song,
                    Artist = artistModel
                });
            }

            _songService.Add(song);

            return new
            {
                song
            };
        }
    }
}
