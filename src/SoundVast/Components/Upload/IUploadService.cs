using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Upload
{
    public interface IUploadService
    {
        bool Add(AudioModel model);
    }
}
