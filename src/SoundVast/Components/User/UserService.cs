using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Repository;

namespace SoundVast.Components.User
{
    public class UserService : IUserService
    {
        private readonly IRepository<AudioModel> _repository;

        public UserService(IRepository<AudioModel> repository)
        {
            _repository = repository;
        }

        public ICollection<AudioModel> GetUploadsForUser(string userId)
        {
            return _repository.GetAll().Where(x => x.UserId == userId).ToList();
        }
    }
}
