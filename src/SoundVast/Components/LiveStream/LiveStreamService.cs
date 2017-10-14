using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.LiveStream
{
    public class LiveStreamService : AudioService<Models.LiveStream>, ILiveStreamService
    {
        public LiveStreamService(IRepository<Models.LiveStream> repository, IValidationProvider validationProvider) : base(repository, validationProvider)
        {
        }
    }
}
