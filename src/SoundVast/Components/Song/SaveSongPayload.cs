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
using SoundVast.Components.Tag;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Song
{
    public class SaveSongPayload : MutationPayloadGraphType
    {
        private readonly ISongService _songService;
        private readonly IArtistService _artistService;
        private readonly ICloudStorage _cloudStorage;
        private readonly ITagService _tagService;

        public SaveSongPayload(ISongService songService, IArtistService artistService, ICloudStorage cloudStorage, ITagService tagService)
        {
            _songService = songService;
            _artistService = artistService;
            _cloudStorage = cloudStorage;
            _tagService = tagService;

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
            var tags = inputs.Get("tags", new object[0]).Select(x => x.As<Dictionary<string, object>>().ToObject<TagInput>());
            var album = inputs.Get("album", new object()).As<Dictionary<string, object>>().ToObject<AlbumInput>();
            var free = inputs.Get<bool>("free");
            var releaseDate = inputs.Get<DateTime?>("releaseDate");
            var genreIds = inputs.Get("genreIds", new object[0]).Cast<int>().ToList();
            var user = context.UserContext.As<Context>().CurrentUser;
            var placeholderImage = _cloudStorage.GetBlob(CloudStorageType.Image, "SoundVast");

            var song = new Models.Song
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                Free = free,
                UserId = user.Id,
                AlbumId = album.Id,
                ReleaseDate = releaseDate,
            };

            foreach (var genreId in genreIds)
            {
                song.AudioGenres.Add(new AudioGenre { GenreId = genreId });
            }

            if (album.Album != null)
            {
                song.Album = new Album.Models.Album
                {
                    Name = album.Album,
                    CoverImageUrl = placeholderImage.CloudBlockBlob.Uri.AbsoluteUri
                };

                foreach (var genreId in genreIds)
                {
                    song.Album.AudioGenres.Add(new AudioGenre { GenreId = genreId });
                }
            }

            foreach (var tag in tags)
            {
                Tag.Tag tagModel;

                if (tag.Tag != null)
                {
                    tagModel = new Tag.Tag
                    {
                        Name = tag.Tag
                    };
                }
                else if (tag.Id.HasValue)
                {
                    var existingTag = _tagService.GetTag(tag.Id.Value);

                    tagModel = existingTag;
                }
                else
                {
                    throw new Exception("A tag id or name must be supplied");
                }

                if (song.AudioTags.All(x => x.Tag.Id != tagModel.Id))
                {
                    song.AudioTags.Add(new AudioTag { Tag = tagModel });
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
                    var existingArtist = _artistService.GetAudio(artist.Id.Value);

                    artistModel = existingArtist;
                }
                else
                {
                    throw new Exception("An artist id or name must be supplied");
                }

                foreach (var genreId in genreIds)
                {
                    if (artistModel.AudioGenres.All(x => x.GenreId != genreId))
                    {
                        artistModel.AudioGenres.Add(new AudioGenre { GenreId = genreId });
                    }
                }

                if (song.Album != null)
                {
                    if (artistModel.ArtistAlbums.All(x => x.Album.Id != song.Album.Id))
                    {
                        artistModel.ArtistAlbums.Add(new ArtistAlbum { Album = song.Album });
                    }
                }

                if (song.ArtistSongs.All(x => x.Artist.Id != artistModel.Id))
                {
                    song.ArtistSongs.Add(new ArtistSong { Artist = artistModel });
                }
            }

            _songService.Add(song);

            return new
            {
                song
            };
        }
    }
}
