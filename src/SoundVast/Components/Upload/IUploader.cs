using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace SoundVast.Components.Upload
{
    public interface IUploader
    {
        Task<string> UploadImage(IFormFile file);
    }
}
