using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SoundVast.Models;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.CommentModels;

namespace SoundVast.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<RatingCount> RatingCount { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Link> Links { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<FileStreamGenre> FileStreamGenres { get; set; }
        public DbSet<LiveStreamGenre> LiveStreamGenres { get; set; }
        public DbSet<FileStreamCategory> FileStreamCategories { get; set; }
        public DbSet<LiveStreamCategory> LiveStreamCategories { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<AudioGenre> AudioGenres { get; set; }
        public DbSet<Audio> Audios { get; set; }
        public DbSet<LiveStream> LiveStreams { get; set; }

        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AudioGenre>().HasKey(x => new { x.AudioId, x.GenreId });
            modelBuilder.Entity<FileStream>().HasMany(x => x.Links).WithOne().OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<CommentRatingJoin>().HasKey(x => new { x.CommentId, x.CommentRatingId });
            modelBuilder.Entity<Comment>().HasMany(x => x.Reports).WithOne(x => x.Comment).OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Comment>().HasMany(x => x.Replies).WithOne(x => x.OriginalComment);
            modelBuilder.Entity<AudioRatingJoin>().HasKey(x => new { x.AudioId, x.AudioRatingId });

            //  modelBuilder.Entity<Comment>().HasOptional(x => x.User);

            base.OnModelCreating(modelBuilder);
        }
    }
}
