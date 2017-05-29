using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.User;

namespace SoundVast.Components.Rating.Models
{
    public class RatingModel
    {
        public int Id { get; set; }
        public bool Liked { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
