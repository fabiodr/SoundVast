using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
