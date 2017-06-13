using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Account.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [RegularExpression(@"^.+@.+$", ErrorMessage = "Must be a valid email address")]
        public string Email { get; set; }
    }
}
