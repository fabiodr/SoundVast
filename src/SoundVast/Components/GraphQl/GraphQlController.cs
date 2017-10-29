using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using GraphQL.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using SoundVast.Components.GraphQl.Models;
using SoundVast.Components.Song;
using SoundVast.Components.User;
using SoundVast.CustomHelpers;
using SoundVast.Validation;

namespace SoundVast.Components.GraphQl
{
    [Route("graphql")]
    public class GraphQlController : Controller
    {
        private readonly AppSchema _schema;
        private readonly IValidationProvider _validationProvider;
        private readonly UserManager<ApplicationUser> _userManager;

        public GraphQlController(AppSchema schema, IValidationProvider validationProvider,
            UserManager<ApplicationUser> userManager)
        {
            _schema = schema;
            _validationProvider = validationProvider;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]GraphQlQuery graphQlQuery)
        {
            var inputs = graphQlQuery.Variables.ToInputs();
            var context = new Context
            {
                ApplicationUser = await _userManager.GetUserAsync(HttpContext.User),
                User = User
            };
            var validationRules = new List<IValidationRule>
            {
                new RequiresAuthValidationRule(),
            }.Concat(DocumentValidator.CoreRules());
            var executionResult = await new DocumentExecuter().ExecuteAsync(options =>
            {
                options.Schema = _schema;
                options.Query = graphQlQuery.Query;
                options.Inputs = inputs;
                options.UserContext = context;
                options.ValidationRules = validationRules;
            });

            if (_validationProvider.HasErrors)
            {
                return BadRequest(_validationProvider.ValidationErrors);
            }

            if (executionResult?.Errors?.Count > 0)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, executionResult.Errors);
            }

            return Ok(executionResult);
        }
    }
}