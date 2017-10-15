using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public bool Liked { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public int? AudioId { get; set; }
        public virtual Audio.Models.Audio Audio { get; set; }
    }
}
