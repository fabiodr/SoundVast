using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using SoundVast.Components.User;

namespace SoundVast.Components.GraphQl
{
    public class Context
    {
        public ApplicationUser CurrentUser { get; set; }
        public HttpContext HttpContext { get; set; }
    }
}
