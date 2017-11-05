using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class Context
    {
        public ApplicationUser ApplicationUser { get; set; }
        public ClaimsPrincipal User { get; set; }
    }
}
