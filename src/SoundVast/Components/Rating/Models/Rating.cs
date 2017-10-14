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
        [Required]
        public string UserId { get; set; }
        [Required]
        public virtual ApplicationUser User { get; set; }
        [Required]
        public int AudioId { get; set; }
        [Required]
        public virtual Audio.Models.Audio Audio { get; set; }
    }
}
