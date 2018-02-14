using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Audio
{
    public class AudioValidator : Validator<Models.Audio>
    {
        protected override IEnumerable<ValidationResult> Validate(Models.Audio model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                yield return new ValidationResult("Name", "Name is required");
            }
        }
    }
}
