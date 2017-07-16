using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SoundVast.Components;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Category.Models;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.Report.Models;
using SoundVast.Components.User;

namespace SoundVast.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        //public DbSet<RatingCountModel> RatingCount { get; set; }
        //public DbSet<RatingModel> Ratings { get; set; }
        //public DbSet<LinkModel> Links { get; set; }
        public DbSet<GenreModel> Genres { get; set; }
        //public DbSet<CategoryModel> Categories { get; set; }
        //public DbSet<FileStreamGenreModel> FileStreamGenres { get; set; }
        //public DbSet<LiveStreamGenreModel> LiveStreamGenres { get; set; }
       // public DbSet<FileStreamCategoryModel> FileStreamCategories { get; set; }
        //public DbSet<LiveStreamCategoryModel> LiveStreamCategories { get; set; }
       // public DbSet<ReportModel> Reports { get; set; }
        //public DbSet<QuoteModel> Quotes { get; set; }
        //public DbSet<CommentModel> Comments { get; set; }
       // public DbSet<FileModel> Files { get; set; }
       // public DbSet<AudioGenreModel> AudioGenres { get; set; }
        public DbSet<AudioModel> Audios { get; set; }
       // public DbSet<LiveStreamModel> LiveStreams { get; set; }

        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<AudioGenreModel>().HasKey(x => new { x.AudioId, x.GenreId });
            //modelBuilder.Entity<FileStreamModel>().HasMany(x => x.Links).WithOne().OnDelete(DeleteBehavior.Cascade);
            //modelBuilder.Entity<CommentRatingJoinModel>().HasKey(x => new { x.CommentId, x.CommentRatingId });
            //modelBuilder.Entity<CommentModel>().HasMany(x => x.Reports).WithOne(x => x.Comment).OnDelete(DeleteBehavior.Cascade);
            //modelBuilder.Entity<CommentModel>().HasMany(x => x.Replies).WithOne(x => x.OriginalComment);
            //modelBuilder.Entity<AudioRatingJoinModel>().HasKey(x => new { x.AudioId, x.AudioRatingId });

            //  modelBuilder.Entity<Comment>().HasOptional(x => x.User);

            base.OnModelCreating(modelBuilder);
        }
    }
}
