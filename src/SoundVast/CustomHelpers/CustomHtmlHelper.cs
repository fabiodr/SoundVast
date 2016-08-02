using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Html;

namespace SoundVast.CustomHelpers
{
    public static class CustomHtmlHelper
    {
        //	public static HtmlString ImageFor<TModel, TValue>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TValue>> expression,
        //           string alternateText, object htmlAttributes)
        //	{
        //		var tagBuilder = new TagBuilder("img");

        //           var metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);
        //		var name = ExpressionHelper.GetExpressionText(expression);

        //		tagBuilder.MergeAttribute("src", metadata.Model.ToString());
        //		tagBuilder.MergeAttribute("alt", alternateText);
        //		tagBuilder.MergeAttribute("name", name);

        //		if (htmlAttributes != null)
        //		{
        //			var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
        //			tagBuilder.MergeAttributes(attributes);
        //		}

        //		return MvcHtmlString.Create(tagBuilder.ToString(TagRenderMode.SelfClosing));
        //	}

        //    public static HtmlString ImageFor<TModel, TValue>(this HtmlHelper<TModel> htmlHelper,
        //        Expression<Func<TModel, TValue>> expression, string action, string controller, object routeValues, object htmlAttributes)
        //    {
        //        var tagBuilder = new TagBuilder("img");
        //           var urlHelper = new UrlHelper(htmlHelper.ViewContext.RequestContext);

        //           var metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);
        //        var name = ExpressionHelper.GetExpressionText(expression);

        //        tagBuilder.MergeAttribute("src", metadata.Model.ToString());
        //        tagBuilder.MergeAttribute("name", name);
        //           tagBuilder.MergeAttribute("href", urlHelper.Action(action, controller, routeValues));

        //           if (htmlAttributes != null)
        //        {
        //            var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
        //            tagBuilder.MergeAttributes(attributes);
        //        }

        //        return MvcHtmlString.Create(tagBuilder.ToString(TagRenderMode.SelfClosing));
        //    }

        //public static IHtmlContent ImageFor<TModel, TValue>(this IHtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TValue>> expression,
        //    string action, object routeValues, object htmlAttributes)
        //{
        //    var tagBuilder = new TagBuilder("img");
        //    var urlHelper = new UrlHelper(htmlHelper.ViewContext);

        //    var metadata = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);
        //    var name = ExpressionHelper.GetExpressionText(expression);

        //    tagBuilder.MergeAttribute("src", metadata.Model.ToString());
        //    tagBuilder.MergeAttribute("name", name);
        //    tagBuilder.MergeAttribute("href", urlHelper.Action(action, routeValues));

        //    if (htmlAttributes != null)
        //    {
        //        var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
        //        tagBuilder.MergeAttributes(attributes);
        //    }

        //    return MvcHtmlString.Create(tagBuilder.ToString(TagRenderMode.SelfClosing));
        //}

        //       public static HtmlString ImageFor(this HtmlHelper htmlHelper, string imagePath, string action, string controller, object routeValues, object htmlAttributes)
        //	{
        //		var urlHelper = new UrlHelper(htmlHelper.ViewContext.RequestContext);
        //		var img = new TagBuilder("img");
        //           img.Attributes.Add("src", imagePath);
        //           var anchor = new TagBuilder("a") { InnerHtml = img.ToString(TagRenderMode.SelfClosing) };
        //           anchor.Attributes["href"] = urlHelper.Action(action, controller, routeValues);
        //           anchor.MergeAttributes(new RouteValueDictionary(htmlAttributes));

        //           return MvcHtmlString.Create(anchor.ToString());
        //       }
        //
        //public static IHtmlContent RadioButtonForSelectList<TModel, TProperty>(
        //    this IHtmlHelper<TModel> htmlHelper,
        //    Expression<Func<TModel, TProperty>> expression,
        //    IEnumerable<SelectListItem> listOfValues)
        //{
        //    var metaData = ModelMetadata.FromLambdaExpression(expression, htmlHelper.ViewData);
        //    var sb = new StringBuilder();
        //    if (listOfValues != null)
        //    {
        //        // Create a radio button for each item in the list 
        //        foreach (var item in listOfValues)
        //        {
        //            // Generate an id to be given to the radio button field 
        //            var id = string.Format("{0}_{1}", metaData.PropertyName, item.Value);
        //            // Create and populate a radio button using the existing html helpers 
        //            var label = htmlHelper.Label(id, HttpUtility.HtmlEncode(item.Text));
        //            var radio = htmlHelper.RadioButtonFor(expression, item.Value, new { id }).ToHtmlString();
        //            // Create the html string that will be returned to the client 
        //            // e.g. <input data-val="true" data-val-required=
        //            //   "You must select an option" id="TestRadio_1" 
        //            //   name="TestRadio" type="radio" 
        //            //   value="1" /><label for="TestRadio_1">Line1</label> 
        //            sb.AppendFormat("<div class=\"RadioButton\">{0}{1}</div>", radio, label);
        //        }
        //    }
        //    return htmlHelper.Display("");
        //    return MvcHtmlString.Create(sb.ToString());
        //}
    }
}