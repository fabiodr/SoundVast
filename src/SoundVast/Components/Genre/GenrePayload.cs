﻿using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Genre
{
    public class GenrePayload : ObjectGraphType<Models.Genre>
    {
        public GenrePayload(ICloudStorage cloudStorage)
        {
            Name = nameof(Genre);

            Field<IdGraphType>("id");
            Field(x => x.Name);
            Field<StringGraphType>("coverImageUrl", "The cover image url for the genre", 
                resolve: c => cloudStorage.GetBlob(CloudStorageType.Image, c.Source.CoverImageName).Uri.AbsoluteUri);
        }
    }
}
