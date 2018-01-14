using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Rating
{
    public interface IRatingService
    {
        Models.Rating Get(int id);
    }
}
