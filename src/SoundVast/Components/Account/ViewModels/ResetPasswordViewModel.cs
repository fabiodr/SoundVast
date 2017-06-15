using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Account.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required]
        [StringLength(300)]
        public string Password { get; set; }

        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        public string UserId { get; set; }

        public string Code { get; set; }
    }
}
