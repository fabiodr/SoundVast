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
            Field(x => x.Type);
            Field<ListGraphType<ImagePayload>>("coverImages", "The different dimention images for the cover image", resolve: GetCoverImages);
        }

        private async Task<object> GetCoverImages(ResolveFieldContext<Models.Genre> c)
        {
            var container = _cloudStorage.CloudBlobContainers[CloudStorageType.Image];

            if (c.Source.CoverImageName != null)
            {
                var segmentedBlobs = await container.ListBlobsSegmentedAsync(c.Source.CoverImageName, null);
                var blobs = segmentedBlobs.Results.OfType<CloudBlockBlob>();
                var coverImageUrls = blobs.Select(x => x.Uri.AbsoluteUri);
                var images = Image.CoverImageSizes.Select(x =>
                {
                    var coverImageUrl = coverImageUrls.Single(z => z.Contains(x.Key));

                    return new Image
                    {
                        Dimention = x.Key,
                        ImageUrl = coverImageUrl,
                    };
                });

                return images;

            }

            return null;
        }
    }
}
