using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.User
{
    public interface IUserService
    {
        ICollection<AudioModel> GetUploadsForUser(string userId);
    }
}
