using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Account.ViewModels
{
    public class ForgotPasswordEmailViewModel
    {
        public string Email { get; set; }

        public string EmailMessage { get; set; }

        public string Subject { get; set; } = "Reset Password";
    }
}
