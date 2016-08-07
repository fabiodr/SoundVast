using Microsoft.AspNetCore.Http.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Models.AccountViewModels
{
    public class ExternalLoginListViewModel
    {
        public IEnumerable<AuthenticationDescription> AuthenticationDescriptions { get; set; }
    }
}
