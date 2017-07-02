using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Utilities.ModelState
{
    public interface IModelState
    {
        string ConvertToJson(ModelStateDictionary modelState);
    }
}
