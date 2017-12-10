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
        private readonly IRepository<ApplicationUser> _repository;

        public UserService(IRepository<ApplicationUser> repository)
        {
            _repository = repository;
        }
    }
}
