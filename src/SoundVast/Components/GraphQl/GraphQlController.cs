using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Components.GraphQl.Models;
using SoundVast.Components.Song;

namespace SoundVast.Components.GraphQl
{
    [Route("graphql")]
    public class GraphQlController : Controller
    {
        private readonly SongQuery _songsQuery;
        private readonly SongMutation _songsMutation;

        public GraphQlController(SongQuery songsQuery, SongMutation songsMutation)
        {
            _songsQuery = songsQuery;
            _songsMutation = songsMutation;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GraphQlQuery graphQlQuery)
        {
            var schema = new Schema
            {
                Query = _songsQuery,
                Mutation = _songsMutation
            };
            var inputs = graphQlQuery.Variables.ToInputs();

            var result = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = graphQlQuery.Query;
                _.Inputs = inputs;

            }).ConfigureAwait(false);

            if (result.Errors?.Count > 0)
            {
                return BadRequest(result.Errors);
            }

            return Ok(result);
        }
    }
}