using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Song
{
    public class SongService : AudioService<SongModel>, ISongService
    {
        public SongService(IRepository<SongModel> repository, IValidationProvider validationProvider, 
            IAudioValidator audioValidator) : base(repository, validationProvider, audioValidator)
        {
        }
    }
}
