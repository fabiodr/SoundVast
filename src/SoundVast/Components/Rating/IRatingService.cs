using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.Rating
{
    public interface IRatingService<T> where T : IRatable
    {
        Models.Rating Rate(int ratableId, string userId, bool liked);
    }
}
