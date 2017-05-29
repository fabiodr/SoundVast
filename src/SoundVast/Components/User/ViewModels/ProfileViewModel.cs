using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.User.ViewModels
{
    public class ProfileViewModel
    {
        public string UserName { get; }

        public ProfileViewModel(string userName)
        {
            UserName = userName;
        }
    }
}
