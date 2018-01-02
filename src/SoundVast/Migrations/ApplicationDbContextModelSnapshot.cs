﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using SoundVast.Data;
using System;

namespace SoundVast.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
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

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
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

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
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

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("SoundVast.Components.Artist.Models.ArtistAlbum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AlbumId");

                    b.Property<int?>("ArtistId");

                    b.HasKey("Id");

                    b.HasIndex("AlbumId");

                    b.HasIndex("ArtistId");

                    b.ToTable("ArtistAlbum");
                });

            modelBuilder.Entity("SoundVast.Components.Artist.Models.ArtistSong", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArtistId");

                    b.Property<int?>("SongId");

                    b.Property<int?>("SongPendingEditId");

                    b.HasKey("Id");

                    b.HasIndex("ArtistId");

                    b.HasIndex("SongId");

                    b.HasIndex("SongPendingEditId");

                    b.ToTable("ArtistSong");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.Audio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CoverImageUrl")
                        .IsRequired();

                    b.Property<DateTimeOffset>("DateAdded");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int>("PlayCount");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Audios");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Audio");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioGenre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AudioId");

                    b.Property<int>("GenreId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("GenreId");

                    b.ToTable("AudioGenre");
                });

            modelBuilder.Entity("SoundVast.Components.Comment.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AudioId");

                    b.Property<string>("Body")
                        .IsRequired();

                    b.Property<DateTimeOffset>("DateAdded");

                    b.Property<int?>("OriginalCommentId");

                    b.Property<int?>("RatingId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("OriginalCommentId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("SoundVast.Components.Edit.Models.AudioPendingEdit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AudioId");

                    b.Property<string>("ContributorId")
                        .IsRequired();

                    b.Property<string>("CoverImageUrl");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<int?>("GenreId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("ContributorId");

                    b.HasIndex("GenreId");

                    b.ToTable("AudiosPendingEdit");

                    b.HasDiscriminator<string>("Discriminator").HasValue("AudioPendingEdit");
                });

            modelBuilder.Entity("SoundVast.Components.Flag.Models.Flag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AdditionalDetails");

                    b.Property<int?>("AudioId");

                    b.Property<int?>("CommentId");

                    b.Property<string>("Reason");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("CommentId");

                    b.ToTable("Flags");
                });

            modelBuilder.Entity("SoundVast.Components.Genre.Models.Genre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CoverImageUrl")
                        .IsRequired();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Genre");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Genre");
                });

            modelBuilder.Entity("SoundVast.Components.Playlist.Models.Playlist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Playlists");
                });

            modelBuilder.Entity("SoundVast.Components.Playlist.Models.SongPlaylist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("PlaylistId");

                    b.Property<int>("SongId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("PlaylistId");

                    b.HasIndex("SongId");

                    b.HasIndex("UserId");

                    b.ToTable("SongPlaylist");
                });

            modelBuilder.Entity("SoundVast.Components.Quote.Models.Quote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Quotation")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("SoundVast.Components.Rating.Models.Rating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AudioId");

                    b.Property<int?>("CommentId");

                    b.Property<bool>("Liked");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("CommentId");

                    b.HasIndex("UserId");

                    b.ToTable("Ratings");
                });

            modelBuilder.Entity("SoundVast.Components.User.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<int?>("AudioId");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<int>("ContributionScore");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("SoundVast.Components.Album.Models.Album", b =>
                {
                    b.HasBaseType("SoundVast.Components.Audio.Models.Audio");


                    b.ToTable("Album");

                    b.HasDiscriminator().HasValue("Album");
                });

            modelBuilder.Entity("SoundVast.Components.Artist.Models.Artist", b =>
                {
                    b.HasBaseType("SoundVast.Components.Audio.Models.Audio");


                    b.ToTable("Artist");

                    b.HasDiscriminator().HasValue("Artist");
                });

            modelBuilder.Entity("SoundVast.Components.LiveStream.Models.LiveStream", b =>
                {
                    b.HasBaseType("SoundVast.Components.Audio.Models.Audio");

                    b.Property<string>("LiveStreamUrl");

                    b.ToTable("LiveStream");

                    b.HasDiscriminator().HasValue("LiveStream");
                });

            modelBuilder.Entity("SoundVast.Components.Song.Models.Song", b =>
                {
                    b.HasBaseType("SoundVast.Components.Audio.Models.Audio");

                    b.Property<int?>("AlbumId");

                    b.Property<bool>("Free");

                    b.HasIndex("AlbumId");

                    b.ToTable("Song");

                    b.HasDiscriminator().HasValue("Song");
                });

            modelBuilder.Entity("SoundVast.Components.Edit.Models.LiveStreamPendingEdit", b =>
                {
                    b.HasBaseType("SoundVast.Components.Edit.Models.AudioPendingEdit");

                    b.Property<string>("LiveStreamUrl");

                    b.ToTable("LiveStreamPendingEdit");

                    b.HasDiscriminator().HasValue("LiveStreamPendingEdit");
                });

            modelBuilder.Entity("SoundVast.Components.Edit.Models.SongPendingEdit", b =>
                {
                    b.HasBaseType("SoundVast.Components.Edit.Models.AudioPendingEdit");

                    b.Property<int?>("AlbumId");

                    b.Property<bool>("Free");

                    b.HasIndex("AlbumId");

                    b.ToTable("SongPendingEdit");

                    b.HasDiscriminator().HasValue("SongPendingEdit");
                });

            modelBuilder.Entity("SoundVast.Components.Genre.Models.LiveStreamGenre", b =>
                {
                    b.HasBaseType("SoundVast.Components.Genre.Models.Genre");


                    b.ToTable("LiveStreamGenre");

                    b.HasDiscriminator().HasValue("LiveStreamGenre");
                });

            modelBuilder.Entity("SoundVast.Components.Genre.Models.SongGenre", b =>
                {
                    b.HasBaseType("SoundVast.Components.Genre.Models.Genre");


                    b.ToTable("SongGenre");

                    b.HasDiscriminator().HasValue("SongGenre");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Artist.Models.ArtistAlbum", b =>
                {
                    b.HasOne("SoundVast.Components.Album.Models.Album", "Album")
                        .WithMany("ArtistAlbums")
                        .HasForeignKey("AlbumId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Artist.Models.Artist", "Artist")
                        .WithMany("ArtistAlbums")
                        .HasForeignKey("ArtistId");
                });

            modelBuilder.Entity("SoundVast.Components.Artist.Models.ArtistSong", b =>
                {
                    b.HasOne("SoundVast.Components.Artist.Models.Artist", "Artist")
                        .WithMany("ArtistSongs")
                        .HasForeignKey("ArtistId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Song.Models.Song", "Song")
                        .WithMany("ArtistSongs")
                        .HasForeignKey("SongId");

                    b.HasOne("SoundVast.Components.Edit.Models.SongPendingEdit")
                        .WithMany("ArtistSongs")
                        .HasForeignKey("SongPendingEditId");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.Audio", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioGenre", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("AudioGenres")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Genre.Models.Genre", "Genre")
                        .WithMany("AudioGenres")
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Comment.Models.Comment", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("Comments")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Comment.Models.Comment", "OriginalComment")
                        .WithMany("Replies")
                        .HasForeignKey("OriginalCommentId");

                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Components.Edit.Models.AudioPendingEdit", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany()
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.User.ApplicationUser", "Contributor")
                        .WithMany()
                        .HasForeignKey("ContributorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Genre.Models.Genre", "Genre")
                        .WithMany()
                        .HasForeignKey("GenreId");
                });

            modelBuilder.Entity("SoundVast.Components.Flag.Models.Flag", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany()
                        .HasForeignKey("AudioId");

                    b.HasOne("SoundVast.Components.Comment.Models.Comment", "Comment")
                        .WithMany()
                        .HasForeignKey("CommentId");
                });

            modelBuilder.Entity("SoundVast.Components.Playlist.Models.Playlist", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany("Playlists")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Playlist.Models.SongPlaylist", b =>
                {
                    b.HasOne("SoundVast.Components.Playlist.Models.Playlist", "Playlist")
                        .WithMany("SongPlaylists")
                        .HasForeignKey("PlaylistId");

                    b.HasOne("SoundVast.Components.Song.Models.Song", "Song")
                        .WithMany("SongPlaylists")
                        .HasForeignKey("SongId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Components.Rating.Models.Rating", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("Ratings")
                        .HasForeignKey("AudioId");

                    b.HasOne("SoundVast.Components.Comment.Models.Comment", "Comment")
                        .WithMany("Ratings")
                        .HasForeignKey("CommentId");

                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Components.User.ApplicationUser", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio")
                        .WithMany("Contributors")
                        .HasForeignKey("AudioId");
                });

            modelBuilder.Entity("SoundVast.Components.Song.Models.Song", b =>
                {
                    b.HasOne("SoundVast.Components.Album.Models.Album", "Album")
                        .WithMany("Songs")
                        .HasForeignKey("AlbumId");
                });

            modelBuilder.Entity("SoundVast.Components.Edit.Models.SongPendingEdit", b =>
                {
                    b.HasOne("SoundVast.Components.Album.Models.Album", "Album")
                        .WithMany()
                        .HasForeignKey("AlbumId");
                });
#pragma warning restore 612, 618
        }
    }
}
