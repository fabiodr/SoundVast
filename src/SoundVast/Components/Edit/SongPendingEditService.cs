using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Edit
{
    public class SongPendingEditService : AudioPendingEditService<SongPendingEdit>, ISongPendingEditService
    {
        private readonly IRepository<SongPendingEdit> _repository;

        public SongPendingEditService(IRepository<SongPendingEdit> repository, IValidationProvider validationProvider) : 
            base(repository, validationProvider)
        {
            _repository = repository;
        }
    }
}
