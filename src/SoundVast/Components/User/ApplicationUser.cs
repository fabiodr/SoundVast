using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Song.Models;

namespace SoundVast.Components.User
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<Playlist.Models.Playlist> Playlists { get; set; }
        public int ContributionScore { get; set; }
    }
}
