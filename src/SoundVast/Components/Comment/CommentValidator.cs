using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Comment
{
    public class CommentValidator : Validator<Models.Comment>
    {
        protected override IEnumerable<ValidationResult> Validate(Models.Comment model)
        {
            return Enumerable.Empty<ValidationResult>();
        }
    }
}
