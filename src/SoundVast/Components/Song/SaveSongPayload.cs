using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Album;
using SoundVast.Components.Album.Models;
using SoundVast.Components.Artist;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Audio.Models;
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
            var artists = inputs.Get("artists", new object[0]).Select(x => x.As<Dictionary<string, object>>().ToObject<ArtistInput>());
            var album = inputs.Get<string>("album");
            var albumId = inputs.Get<int>("albumId");
            var free = inputs.Get<bool>("free");
            var genreIds = inputs.Get("genreIds", new object[0]).Cast<int>().ToList();
            var user = context.UserContext.As<Context>().CurrentUser;
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            var song = new Models.Song
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                Free = free,
                UserId = user.Id,
                AlbumId = albumId
            };

            foreach (var genreId in genreIds)
            {
                song.AudioGenres.Add(new AudioGenre { GenreId = genreId });
            }

            if (album != null)
            {
                song.Album = new Album.Models.Album
                {
                    Name = album,
                    CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                };

                foreach (var genreId in genreIds)
                {
                    song.Album.AudioGenres.Add(new AudioGenre { GenreId = genreId });
                }
            }

            foreach (var artist in artists)
            {
                Artist.Models.Artist artistModel;

                if (artist.Artist != null)
                {
                    artistModel = new Artist.Models.Artist
                    {
                        Name = artist.Artist,
                        CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                    };
                }
                else if (artist.Id.HasValue)
                {
                    artistModel = new Artist.Models.Artist
                    {
                        Id = artist.Id.Value
                    };
                }
                else
                {
                    throw new Exception("An artist id or name must be supplied");
                }

                foreach (var genreId in genreIds)
                {
                   artistModel.AudioGenres.Add(new AudioGenre { GenreId = genreId });
                }

                if (album != null)
                {
                    artistModel.ArtistAlbums.Add(new ArtistAlbum { Album = song.Album });
                }

                song.ArtistSongs.Add(new ArtistSong { Artist = artistModel });
            }

            _songService.Add(song);

            return new
            {
                song
            };
        }
    }
}
