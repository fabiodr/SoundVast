using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.Edit
{
    public interface ISongPendingEditService : IAudioPendingEditService<SongPendingEdit>
    {
    }
}
