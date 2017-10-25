using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Upload
{
    public class UploadImageType : ObjectGraphType<object>
    {
        public UploadImageType()
        {
            Name = "UploadImage";

            Field<StringGraphType>("imagePath");
        }
    }
}
