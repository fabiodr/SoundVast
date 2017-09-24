using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Radio.Models;

namespace SoundVast.Components.Radio
{
    public interface IRadioService : IAudioService<RadioModel>
    {
    }
}
