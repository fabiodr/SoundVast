using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.User
{
    public interface IUserService
    {
        ICollection<Song.Models.Song> GetUploadsForUser(string userId);
    }
}
