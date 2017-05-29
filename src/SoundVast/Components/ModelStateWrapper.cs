using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace SoundVast.Components
{
    public interface IValidationDictionary
    {
        void AddError(string key, string errorMessage);
        bool IsValid { get; }
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
    }
}