using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Repository;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.IO;
using Microsoft.Extensions.Configuration;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.ServiceLayer
{
    public interface IPlaylistService : IAudioService<Playlist>
    {
    }

    public class PlaylistService : AudioService<Playlist>, IPlaylistService
    {
        private readonly IRepository<Playlist> _repository;

        public PlaylistService(IValidationDictionary validationDictionary, IRepository<Playlist> repository, ICloudStorage cloudStorage,
            IConfiguration configuration) 
            : base(validationDictionary, repository, cloudStorage, configuration)
        {
            _repository = repository;
        }
    }
}