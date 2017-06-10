using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Account.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [StringLength(15)]
        public string UserName { get; set; }

        [Required]
        [StringLength(300)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
