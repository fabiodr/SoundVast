using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using SoundVast.CustomHelpers;

namespace SoundVast.Components
{
    public class CustomBaseController : Controller
    {
        private readonly IServiceProvider _serviceProvider;

        public CustomBaseController()
        {
            
        }

        public CustomBaseController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        protected string RenderPartialViewToString(string viewName, object model)
        {
            if (string.IsNullOrEmpty(viewName))
            {
                viewName = ControllerContext.ActionDescriptor.ActionName;
            }

            ViewData.Model = model;

            using (var sw = new StringWriter())
            {
                var engine = (ICompositeViewEngine)_serviceProvider.GetService(typeof(ICompositeViewEngine));
                var viewResult = engine.FindView(ControllerContext, viewName, false);

                var viewContext = new ViewContext(
                    ControllerContext,
                    viewResult.View,
                    ViewData,
                    TempData,
                    sw,
                    new HtmlHelperOptions()
                );

                viewResult.View.RenderAsync(viewContext).Wait();

                return sw.GetStringBuilder().ToString();
            }
        }

        protected IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            Response.StatusCode = (int)HttpStatusCode.NotFound;
            return new EmptyResult();
        }

        protected IActionResult ViewOrPartial()
        {
            return ViewOrPartial(null, null);
        }

        protected IActionResult ViewOrPartial(string viewName)
        {
            return ViewOrPartial(viewName, null);
        }

        protected IActionResult ViewOrPartial(object model)
        {
            return ViewOrPartial(null, model);
        }

        protected IActionResult ViewOrPartial(string viewName, object model)
        {
            if (Request.IsAjaxRequest())
            {
                return PartialView(viewName, model);
            }

            return View(viewName, model);
        }
    }
}