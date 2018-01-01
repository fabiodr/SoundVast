using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Audio.Models
{
    public class AudioGenre
    {
        [Required]
        public int Id { get; set; }
        public int AudioId { get; set; }
        public virtual Audio Audio { get; set; }
        public int GenreId { get; set; }
        public virtual Genre.Models.Genre Genre { get; set; }
    }
}
