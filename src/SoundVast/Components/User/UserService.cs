using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Repository;

namespace SoundVast.Components.User
{
    public class UserService : IUserService
    {
        private readonly IRepository<SongModel> _repository;

        public UserService(IRepository<SongModel> repository)
        {
            _repository = repository;
        }

        public ICollection<SongModel> GetUploadsForUser(string userId)
        {
            return _repository.GetAll().Where(x => x.UserId == userId).ToList();
        }
    }
}
