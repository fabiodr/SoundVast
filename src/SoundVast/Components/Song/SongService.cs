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
    public class SongService : AudioService<Models.Song>, ISongService
    {
        public SongService(IRepository<Models.Song> repository, IValidationProvider validationProvider) : base(repository, validationProvider)
        {
        }
    }
}
