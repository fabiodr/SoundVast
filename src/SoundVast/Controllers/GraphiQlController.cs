using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Account;

namespace SoundVast.Controllers
{
    [Route("graphiql")]
    public class GraphiQlController : Controller
    {
        [HttpGet]
        [Produces("text/html")]
        public IActionResult Get()
        {
            return View("~/wwwroot/components/_config/graphiQl/graphiQl.htm");
        }
    }
}
