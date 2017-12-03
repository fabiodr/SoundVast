using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.Quote;
using SoundVast.Components.Quote.Models;

namespace SoundVast.Components.Error
{
    public class ErrorController : CustomBaseController
    {
        private readonly IQuoteService _quoteService;

        public ErrorController(IQuoteService quoteService)
        {
            _quoteService = quoteService;
        }

        //public IActionResult BadGateway()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.BadGateway;

        //    return View("~/Views/Errors/BadGateway.cshtml", quoteViewModel);
        //}

        //public IActionResult BadRequest()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.BadRequest;

        //    return View("~/Views/Errors/BadRequest.cshtml", quoteViewModel);
        //}

        //public IActionResult GatewayTimeout()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.GatewayTimeout;

        //    return View("~/Views/Errors/GatewayTimeout.cshtml", quoteViewModel);
        //}

        //public IActionResult Gone()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.Gone;

        //    return View("~/Views/Errors/Gone.cshtml", quoteViewModel);
        //}

        //public IActionResult InternalServerError()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        //    return View("~/Views/Errors/InternalServerError.cshtml", quoteViewModel);
        //}

        //public IActionResult NotFound()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.NotFound;

        //    return View("~/Views/Errors/NotFound.cshtml", quoteViewModel);
        //}

        //public IActionResult RequestTimeout()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.RequestTimeout;

        //    return View("~/Views/Errors/RequestTimeout.cshtml", quoteViewModel);
        //}

        //public IActionResult ServiceUnavailable()
        //{
        //    var quoteViewModel = Mapper.Map<Quote, QuoteViewModel>(_quoteService.GetRandomQuote());

        //    Response.StatusCode = (int)HttpStatusCode.ServiceUnavailable;

        //    return View("~/Views/Errors/ServiceUnavailable.cshtml", quoteViewModel);
        //}
    }
}