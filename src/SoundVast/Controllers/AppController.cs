using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Controllers
{
    public class AppController : Controller
    {
        [Produces("text/html")]
        public IActionResult Index()
        {
            return View("~/wwwroot/components/app/app.htm");
        }
  }
}