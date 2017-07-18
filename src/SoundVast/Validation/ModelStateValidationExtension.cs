using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

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
    }
}
