using System.Collections.Generic;
using SoundVast.Repository;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Flag.Models;
using SoundVast.Components.Playlist.Models;
using SoundVast.CustomHelpers;
using SoundVast.Validation;

namespace SoundVast.Components.Playlist
{
    public class PlaylistService : IPlaylistService
    {
        private readonly IRepository<Models.Playlist> _repository;
        private readonly IValidationProvider _validationProvider;

        public PlaylistService(IRepository<Models.Playlist> repository, IValidationProvider validationProvider)
        {
            _repository = repository;
            _validationProvider = validationProvider;
        }

        public void AddToPlaylist(SongPlaylist songPlaylist)
        {
            var playlist = _repository.Get(songPlaylist.PlaylistId.Value);

            playlist.SongPlaylists.Add(songPlaylist);

            _repository.Save();
        }

        public void Add(Models.Playlist model)
        {
            _validationProvider.Validate(model);

            if (!_validationProvider.HasErrors)
            {
                _repository.Add(model);
            }
        }

        public IEnumerable<Models.Playlist> GetPlaylistsForUser(string userId)
        {
            return _repository.GetAll().Where(x => x.UserId == userId).BuildPlaylist();
        }

        public Models.Playlist GetPlaylist(int id)
        {
            return _repository.GetAll().BuildPlaylist().Single(x => x.Id == id);
        }
    }
}