using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Rating.Models;

namespace SoundVast.Components.Audio.Models
{
    public class AudioRatingModel : RatingModel
    {
        public ICollection<AudioRatingJoinModel> AudioRatingJoins { get; set; }
    }
}
