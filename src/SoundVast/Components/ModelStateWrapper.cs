using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SoundVast.CustomHelpers;

namespace SoundVast.Components
{
    public interface IValidationDictionary
    {
        void AddError(string key, string errorMessage);
        bool IsValid { get; }
        string ConvertToJson();
    }

    public class ModelStateWrapper : IValidationDictionary
    {
        private readonly ModelStateDictionary _modelState;
        public bool IsValid => _modelState.IsValid;

        public ModelStateWrapper(ModelStateDictionary modelState)
        {
            _modelState = modelState;
        }

        public void AddError(string key, string errorMessage)
        {
            _modelState.AddModelError(key, errorMessage);
        }

        public string ConvertToJson()
        {
            return _modelState.ConvertErrorsToJson();
        }
    }
}