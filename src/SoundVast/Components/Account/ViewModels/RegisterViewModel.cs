using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Account.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [StringLength(15)]
        [RegularExpression(@"^\S+$", ErrorMessage = "Must not contain only spaces")]
        public string Username { get; set; }

        [Required]
        [RegularExpression(@"^.+@.+$", ErrorMessage = "Must be a valid email address")]
        public string Email { get; set; }

        [Required]
        [StringLength(300)]
        public string Password { get; set; }

        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}
