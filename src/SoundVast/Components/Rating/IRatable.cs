using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Rating
{
    public interface IRatable
    {
        int Id { get; set; }
        int Likes { get; }
        int Dislikes { get; }
        DateTimeOffset DateAdded { get; set; }
        ICollection<Models.Rating> Ratings { get; set; }
    }
}
