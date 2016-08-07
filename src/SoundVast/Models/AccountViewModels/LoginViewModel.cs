using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Models.AccountViewModels
{
    public class LoginViewModel
    {
        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Your username will be between 3-15 characters")]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "Your username will only contain letters and/or numbers")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
