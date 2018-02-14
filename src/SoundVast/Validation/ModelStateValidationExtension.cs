using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace SoundVast.Validation
{
    public static class ModelStateValidationExtension
    {
        public static void AddModelErrors(this ModelStateDictionary state,
            ValidationException exception)
        {
            foreach (var error in exception.Errors)
                state.AddModelError(error.Key, error.Message);
        }

        public static string ConvertErrorsToJson(this ModelStateDictionary modelStateDictionary)
        {
            var modelStateErrors = modelStateDictionary.ToDictionary(x => x.Key, x => x.Value.Errors.Select(e => e.ErrorMessage));
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
