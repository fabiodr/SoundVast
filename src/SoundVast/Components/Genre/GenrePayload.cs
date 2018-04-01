using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream;
using SoundVast.Storage.CloudStorage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace SoundVast.Components.Genre
{
    public class GenrePayload : ObjectGraphType<Models.Genre>
    {
        private readonly ICloudStorage _cloudStorage;

        public GenrePayload(ICloudStorage cloudStorage)
        {
            _cloudStorage = cloudStorage;

            Name = nameof(Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field<StringGraphType>("coverImageUrl", "The cover image url", resolve: GetCoverImageUrl);
        }

        private object GetCoverImageUrl(ResolveFieldContext<Models.Genre> c)
        {
            if (c.Source.CoverImageName == null) return null;

            return $"{_cloudStorage.CloudBlobContainers[CloudStorageType.Image].Uri.AbsoluteUri}/{c.Source.CoverImageName}";
        }
    }
}
