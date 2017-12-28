using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.User;

namespace SoundVast.Components.Edit.Models
{
    public abstract class AudioPendingEdit
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int AudioId { get; set; }
        public Audio.Models.Audio Audio { get; set; }
        public string Name { get; set; }
        public string CoverImageUrl { get; set; }
        [Required]
        public string ContributorId { get; set; }
        public ApplicationUser Contributor { get; set; }
        public int? GenreId { get; set; }
        public virtual Genre.Models.Genre Genre { get; set; }
    }
}
