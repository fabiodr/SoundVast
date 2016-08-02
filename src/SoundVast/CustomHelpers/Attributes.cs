using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace SoundVast.CustomHelpers
{
    public class AjaxAuthorizeAttribute : AuthorizeAttribute
    {
       // protected override void HandleUnauthorizedRequest(AuthorizationContext context)
       // {
            //Try return 403 from client side first, if can't look bookmarks.
       // }
    }
}