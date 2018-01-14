using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SoundVast.Components;
using SoundVast.Components.Album.Models;
using SoundVast.Components.Artist.Models;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.Edit.Models;
using SoundVast.Components.Flag.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Components.Song.Models;

namespace SoundVast.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Playlist> Playlists { get; set; }
        public DbSet<Flag> Flags { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Audio> Audios { get; set; }
        public DbSet<AudioPendingEdit> AudiosPendingEdit { get; set; }

        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Song>();
            modelBuilder.Entity<LiveStream>();
            modelBuilder.Entity<Artist>();
            modelBuilder.Entity<Album>();
            modelBuilder.Entity<SongPendingEdit>();
            modelBuilder.Entity<LiveStreamPendingEdit>();
            modelBuilder.Entity<SongGenre>();
            modelBuilder.Entity<LiveStreamGenre>();
            modelBuilder.Entity<Audio>().HasMany(x => x.Ratings).WithOne(x => x.Audio);
            modelBuilder.Entity<Comment>().HasMany(x => x.Ratings).WithOne(x => x.Comment);
        }
    }
}
