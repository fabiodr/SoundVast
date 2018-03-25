using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public interface IStreamDataService
    {
        StreamData GetStreamData(int id);
    }
}
