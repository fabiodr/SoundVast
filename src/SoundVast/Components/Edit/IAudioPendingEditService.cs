using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Edit.Models;

namespace SoundVast.Components.Edit
{
    public interface IAudioPendingEditService<T> where T : AudioPendingEdit
    {
        void Add(T model);
        T Get(int id);
        IEnumerable<T> GetAudiosPendingEdit();
        void Delete(T model);
    }
}
