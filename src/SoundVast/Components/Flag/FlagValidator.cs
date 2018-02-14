using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Flag
{
    public class FlagValidator : Validator<Models.Flag>
    {
        protected override IEnumerable<ValidationResult> Validate(Models.Flag model)
        {
            return Enumerable.Empty<ValidationResult>();
        }
    }
}
