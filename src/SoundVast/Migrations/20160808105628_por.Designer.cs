using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SoundVast.Data;

namespace SoundVast.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20160808105628_por")]
    partial class por
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("NormalizedName")
                        .HasAnnotation("MaxLength", 256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("SoundVast.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id");

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("NormalizedUserName")
                        .HasAnnotation("MaxLength", 256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasAnnotation("MaxLength", 256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("SoundVast.Models.CommentModels.CommentRatingJoin", b =>
                {
                    b.Property<int>("CommentId");

                    b.Property<int>("CommentRatingId");

                    b.HasKey("CommentId", "CommentRatingId");

                    b.HasIndex("CommentId");

                    b.HasIndex("CommentRatingId");

                    b.ToTable("CommentRatingJoin");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Audio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CategoryId");

                    b.Property<int>("CommentCount");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<int?>("ImageFileId");

                    b.Property<string>("Name");

                    b.Property<int?>("RatingCountId");

                    b.Property<int>("UniqueViews");

                    b.Property<DateTimeOffset>("UploadDate");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ImageFileId");

                    b.HasIndex("RatingCountId");

                    b.HasIndex("UserId");

                    b.ToTable("Audios");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Audio");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioGenre", b =>
                {
                    b.Property<int>("AudioId");

                    b.Property<int>("GenreId");

                    b.HasKey("AudioId", "GenreId");

                    b.HasIndex("AudioId");

                    b.HasIndex("GenreId");

                    b.ToTable("AudioGenres");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioRatingJoin", b =>
                {
                    b.Property<int>("AudioId");

                    b.Property<int>("AudioRatingId");

                    b.HasKey("AudioId", "AudioRatingId");

                    b.HasIndex("AudioId");

                    b.HasIndex("AudioRatingId");

                    b.ToTable("AudioRatingJoin");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<int?>("ImageFileId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("ImageFileId");

                    b.ToTable("Categories");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Category");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AudioId");

                    b.Property<string>("Body");

                    b.Property<DateTime>("Date");

                    b.Property<int?>("OriginalCommentId");

                    b.Property<int?>("RatingCountId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("OriginalCommentId");

                    b.HasIndex("RatingCountId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.File", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Files");

                    b.HasDiscriminator<string>("Discriminator").HasValue("File");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Genre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CategoryId");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<int?>("ImageFileId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ImageFileId");

                    b.ToTable("Genres");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Genre");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Link", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("FileStreamId");

                    b.Property<string>("LinkUrl");

                    b.HasKey("Id");

                    b.HasIndex("FileStreamId");

                    b.ToTable("Links");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Quote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Quotation");

                    b.HasKey("Id");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Rating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<bool>("Liked");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Ratings");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Rating");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.RatingCount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Dislikes");

                    b.Property<int>("Likes");

                    b.HasKey("Id");

                    b.ToTable("RatingCount");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Report", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AdditionalDetails");

                    b.Property<int?>("AudioId");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Reason");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.ToTable("Reports");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Report");
                });

            modelBuilder.Entity("SoundVast.Models.FileStreamModels.FileStream", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Audio");

                    b.Property<string>("Album");

                    b.Property<string>("Artist");

                    b.Property<int?>("AudioFileId");

                    b.Property<TimeSpan?>("Duration");

                    b.Property<string>("Lyrics");

                    b.Property<DateTime?>("ReleaseDate");

                    b.HasIndex("AudioFileId");

                    b.ToTable("FileStream");

                    b.HasDiscriminator().HasValue("FileStream");
                });

            modelBuilder.Entity("SoundVast.Models.LiveStreamModels.LiveStream", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Audio");

                    b.Property<string>("AudioUrl");

                    b.Property<string>("WebsiteUrl");

                    b.ToTable("LiveStream");

                    b.HasDiscriminator().HasValue("LiveStream");
                });

            modelBuilder.Entity("SoundVast.Models.FileStreamModels.FileStreamCategory", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Category");


                    b.ToTable("FileStreamCategory");

                    b.HasDiscriminator().HasValue("FileStreamCategory");
                });

            modelBuilder.Entity("SoundVast.Models.LiveStreamModels.LiveStreamCategory", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Category");


                    b.ToTable("LiveStreamCategory");

                    b.HasDiscriminator().HasValue("LiveStreamCategory");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioFile", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.File");


                    b.ToTable("AudioFile");

                    b.HasDiscriminator().HasValue("AudioFile");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.ImageFile", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.File");


                    b.ToTable("ImageFile");

                    b.HasDiscriminator().HasValue("ImageFile");
                });

            modelBuilder.Entity("SoundVast.Models.FileStreamModels.FileStreamGenre", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Genre");


                    b.ToTable("FileStreamGenre");

                    b.HasDiscriminator().HasValue("FileStreamGenre");
                });

            modelBuilder.Entity("SoundVast.Models.LiveStreamModels.LiveStreamGenre", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Genre");


                    b.ToTable("LiveStreamGenre");

                    b.HasDiscriminator().HasValue("LiveStreamGenre");
                });

            modelBuilder.Entity("SoundVast.Models.CommentModels.CommentRating", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Rating");


                    b.ToTable("CommentRating");

                    b.HasDiscriminator().HasValue("CommentRating");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioRating", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Rating");


                    b.ToTable("AudioRating");

                    b.HasDiscriminator().HasValue("AudioRating");
                });

            modelBuilder.Entity("SoundVast.Models.CommentModels.CommentReport", b =>
                {
                    b.HasBaseType("SoundVast.Models.IdentityModels.Report");

                    b.Property<int?>("CommentId");

                    b.HasIndex("CommentId");

                    b.ToTable("CommentReport");

                    b.HasDiscriminator().HasValue("CommentReport");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("SoundVast.Models.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("SoundVast.Models.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Models.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Models.CommentModels.CommentRatingJoin", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Comment", "Comment")
                        .WithMany("CommentRatingJoins")
                        .HasForeignKey("CommentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Models.CommentModels.CommentRating", "CommentRating")
                        .WithMany("CommentRatingJoins")
                        .HasForeignKey("CommentRatingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Audio", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Category", "Category")
                        .WithMany("Audios")
                        .HasForeignKey("CategoryId");

                    b.HasOne("SoundVast.Models.IdentityModels.ImageFile", "ImageFile")
                        .WithMany()
                        .HasForeignKey("ImageFileId");

                    b.HasOne("SoundVast.Models.IdentityModels.RatingCount", "RatingCount")
                        .WithMany()
                        .HasForeignKey("RatingCountId");

                    b.HasOne("SoundVast.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioGenre", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Audio", "Audio")
                        .WithMany("Genres")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Models.IdentityModels.Genre", "Genre")
                        .WithMany("Audios")
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.AudioRatingJoin", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Audio", "Audio")
                        .WithMany("AudioRatingJoins")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Models.IdentityModels.AudioRating", "AudioRating")
                        .WithMany("AudioRatingJoins")
                        .HasForeignKey("AudioRatingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Category", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.ImageFile", "ImageFile")
                        .WithMany()
                        .HasForeignKey("ImageFileId");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Comment", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Audio", "Audio")
                        .WithMany("Comments")
                        .HasForeignKey("AudioId");

                    b.HasOne("SoundVast.Models.IdentityModels.Comment", "OriginalComment")
                        .WithMany("Replies")
                        .HasForeignKey("OriginalCommentId");

                    b.HasOne("SoundVast.Models.IdentityModels.RatingCount", "RatingCount")
                        .WithMany()
                        .HasForeignKey("RatingCountId");

                    b.HasOne("SoundVast.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Genre", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Category", "Category")
                        .WithMany("Genres")
                        .HasForeignKey("CategoryId");

                    b.HasOne("SoundVast.Models.IdentityModels.ImageFile", "ImageFile")
                        .WithMany()
                        .HasForeignKey("ImageFileId");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Link", b =>
                {
                    b.HasOne("SoundVast.Models.FileStreamModels.FileStream")
                        .WithMany("Links")
                        .HasForeignKey("FileStreamId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Rating", b =>
                {
                    b.HasOne("SoundVast.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Models.IdentityModels.Report", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Audio", "Audio")
                        .WithMany()
                        .HasForeignKey("AudioId");
                });

            modelBuilder.Entity("SoundVast.Models.FileStreamModels.FileStream", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.AudioFile", "AudioFile")
                        .WithMany()
                        .HasForeignKey("AudioFileId");
                });

            modelBuilder.Entity("SoundVast.Models.CommentModels.CommentReport", b =>
                {
                    b.HasOne("SoundVast.Models.IdentityModels.Comment", "Comment")
                        .WithMany("Reports")
                        .HasForeignKey("CommentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
