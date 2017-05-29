using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Repository;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.IO;
using Microsoft.Extensions.Configuration;
using SoundVast.Components.Audio;
using SoundVast.Components.Playlist.Models;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.Playlist
{
    public interface IPlaylistService : IAudioService<PlaylistModel>
    {
    }

    public class PlaylistService : AudioService<PlaylistModel>, IPlaylistService
    {
        private readonly IRepository<PlaylistModel> _repository;

        public PlaylistService(IValidationDictionary validationDictionary, IRepository<PlaylistModel> repository, ICloudStorage cloudStorage,
            IConfiguration configuration) 
            : base(validationDictionary, repository, cloudStorage, configuration)
        {
            _repository = repository;
        }
    }
}