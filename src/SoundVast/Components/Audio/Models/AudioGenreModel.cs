using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Genre.Models;

namespace SoundVast.Components.Audio.Models
{
    public class AudioGenreModel
    {
        public int AudioId { get; set; }
        public AudioModel Audio { get; set; }

        public int GenreId { get; set; }
        public GenreModel Genre { get; set; }
    }
}
