using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace SoundVast.Utilities.ModelState
{
    public class ModelState : IModelState
    {
        public string ConvertToJson(ModelStateDictionary modelState)
        {
            var modelStateErrors = modelState.ToDictionary(x => x.Key, x => x.Value.Errors.Select(e => e.ErrorMessage));
            var validErrormessages = modelStateErrors.Where(z => z.Value.Any()).ToDictionary(x => x.Key, x => x.Value);
            var serializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var jsonString = JsonConvert.SerializeObject(validErrormessages, serializerSettings);

            return jsonString;
        }
    }
}
