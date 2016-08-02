using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Repository;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.IO;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;

namespace SoundVast.ServiceLayer
{
    public interface IPlaylistService : IAudioService<Playlist>
    {
    }

    public class PlaylistService : AudioService<Playlist>, IPlaylistService
    {
        private readonly IRepository<Playlist> _repository;

        public PlaylistService(IValidationDictionary validationDictionary, IRepository<Playlist> repository, IAzureConfig azureConfig) 
            : base(validationDictionary, repository, azureConfig)
        {
            _repository = repository;
        }
    }
}