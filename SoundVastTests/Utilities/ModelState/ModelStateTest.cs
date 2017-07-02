using FluentAssertions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoundVastTests.Utilities.ModelState
{
    [TestFixture]
    public class ModelStateTest
    {
        private SoundVast.Utilities.ModelState.ModelState _modelState;

        [SetUp]
        public void Init()
        {
            _modelState = new SoundVast.Utilities.ModelState.ModelState();
        }

        [Test]
        public void UploadShouldReturnModelErrorsIfModelStateInvalid()
        {
            var modelState = new ModelStateDictionary();

            modelState.AddModelError("test", "test");
            modelState.AddModelError("test", "testTwo");

            var result = _modelState.ConvertToJson(modelState);
            var modelErrors = JsonConvert.DeserializeObject<IDictionary<string, IList<string>>>(result);

            modelErrors["test"][0].Should().Be("test");
            modelErrors["test"][1].Should().Be("testTwo");
        }
    }
}
