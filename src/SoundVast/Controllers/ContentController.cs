using SoundVast.CustomHelpers;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Repository;

namespace SoundVast.Controllers
{
    public class ContentController : CustomBaseController
    {
        //[Route("About-Us")]
        public IActionResult AboutUs()
        {
            if (Request.IsAjaxRequest())
                return PartialView();
            return View();
        }

        [Route("Privacy")]
        public IActionResult Privacy()
        {
            if (Request.IsAjaxRequest())
                return PartialView();
            return View();
        }

        [Route("Copyright")]
        public IActionResult Copyright()
        {
            if (Request.IsAjaxRequest())
                return PartialView();
            return View();
        }

        [Route("Terms-Of-Use")]
        public IActionResult TermsOfUse()
		{
			if (Request.IsAjaxRequest())
				return PartialView();
			return View();
		}
	}
}