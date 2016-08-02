using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Repository;

namespace SoundVast.ServiceLayer
{
    public interface ILiveStreamService : IAudioService<LiveStream>
    {
    }

    public class LiveStreamService : AudioService<LiveStream>, ILiveStreamService
    {
        public LiveStreamService(IValidationDictionary validationDictionary, IRepository<LiveStream> repository, IAzureConfig azureConfig) 
            : base (validationDictionary, repository, azureConfig)
        {
        }
    }
}