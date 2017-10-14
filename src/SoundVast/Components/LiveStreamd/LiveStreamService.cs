//using System;
//using System.Collections.Generic;
//using System.Linq;
//using Microsoft.Extensions.Configuration;
//using SoundVast.Components.Audio;
//using SoundVast.Components.LiveStream.Models;
//using SoundVast.Repository;
//using SoundVast.Storage.CloudStorage;
//using SoundVast.Storage.CloudStorage.AzureStorage;

//namespace SoundVast.Components.LiveStream
//{
//    public interface ILiveStreamService : IAudioService<LiveStream>
//    {
//    }

//    public class LiveStreamService : AudioService<LiveStream>, ILiveStreamService
//    {
//        public LiveStreamService(IValidationDictionary validationDictionary, IRepository<LiveStream> repository, ICloudStorage cloudStorage,
//            IConfiguration configuration) 
//            : base (validationDictionary, repository, cloudStorage, configuration)
//        {
//        }
//    }
//}