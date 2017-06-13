using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Form
{
    public class FormController : Controller
    {
        private readonly IAntiforgery _antiforgery;

        public FormController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        [HttpPost]
        public IActionResult GenerateAntiForgeryToken()
        {
            var antiForgeryToken = _antiforgery.GetAndStoreTokens(HttpContext).RequestToken;

            return Ok(new
            {
                antiForgeryToken,
            });
        }

    }
}