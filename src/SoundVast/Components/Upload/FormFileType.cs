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
    public class FormFileType : ObjectGraphType<IFormFile>
    {
        public FormFileType()
        {
            Name = "FormFile";

            Field<IdGraphType>("id");
            Field<StringGraphType>("filePath");
        }
    }
}
