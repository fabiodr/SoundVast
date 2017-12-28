using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Edit
{
    public class AudioPendingEditValidator : Validator<AudioPendingEdit>
    {
        protected override IEnumerable<ValidationResult> Validate(AudioPendingEdit model)
        {
            return Enumerable.Empty<ValidationResult>();
        }
    }
}
