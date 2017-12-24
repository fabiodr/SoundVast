using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Song.Models;
using SoundVast.Validation;

namespace SoundVast.Components.Playlist
{
    public class PlaylistValidator : Validator<Models.Playlist>
    {
        protected override IEnumerable<ValidationResult> Validate(Models.Playlist model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                yield return new ValidationResult("Name", "Name is required");
            }
        }
    }
}
