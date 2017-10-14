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
        private readonly IRepository<Song.Models.Song> _repository;

        public UserService(IRepository<Song.Models.Song> repository)
        {
            _repository = repository;
        }

        public ICollection<Song.Models.Song> GetUploadsForUser(string userId)
        {
            return _repository.GetAll().Where(x => x.UserId == userId).ToList();
        }
    }
}
