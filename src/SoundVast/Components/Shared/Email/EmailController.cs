using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Shared.Email.ViewModels;
using SoundVast.Services;

namespace SoundVast.Components.Shared.Email
{
    public class EmailController : Controller
    {
        private readonly IEmailSender _emailSender;

        public EmailController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpPost]
        public async Task<IActionResult> SendEmail([FromBody]EmailViewModel model)
        {
            await _emailSender.SendEmailAsync(model.Email, model.Subject, model.Message);

            return Ok();
        }
    }
}