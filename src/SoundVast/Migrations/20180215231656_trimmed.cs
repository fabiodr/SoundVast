using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class trimmed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_YearsActive_YearsActiveId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Audios_AlbumId",
                table: "Audios");

            migrationBuilder.DropTable(
                name: "ArtistAlbum");

            migrationBuilder.DropTable(
                name: "ArtistSong");

            migrationBuilder.DropTable(
                name: "SongPlaylist");

            migrationBuilder.DropTable(
                name: "YearsActive");

            migrationBuilder.DropTable(
                name: "AudiosPendingEdit");

            migrationBuilder.DropTable(
                name: "Playlists");

            migrationBuilder.DropIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_AlbumId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "YearsActiveId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "AlbumId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Free",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Song_ReleaseDate",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "ContributionScore",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "ReleaseDate",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "YearsActiveId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AlbumId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Free",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "Song_ReleaseDate",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ContributionScore",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ArtistAlbum",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlbumId = table.Column<int>(nullable: false),
                    ArtistId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtistAlbum", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArtistAlbum_Audios_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtistAlbum_Audios_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AudiosPendingEdit",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AudioId = table.Column<int>(nullable: false),
                    ContributorId = table.Column<string>(nullable: false),
                    CoverImageUrl = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    GenreId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    LiveStreamUrl = table.Column<string>(nullable: true),
                    AlbumId = table.Column<int>(nullable: true),
                    Free = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudiosPendingEdit", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AudiosPendingEdit_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudiosPendingEdit_AspNetUsers_ContributorId",
                        column: x => x.ContributorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudiosPendingEdit_Genres_GenreId",
                        column: x => x.GenreId,
                        principalTable: "Genres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AudiosPendingEdit_Audios_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Playlists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Playlists", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Playlists_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "YearsActive",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EndYear = table.Column<DateTimeOffset>(nullable: false),
                    StartYear = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_YearsActive", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ArtistSong",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArtistId = table.Column<int>(nullable: false),
                    SongId = table.Column<int>(nullable: true),
                    SongPendingEditId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtistSong", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArtistSong_Audios_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtistSong_Audios_SongId",
                        column: x => x.SongId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ArtistSong_AudiosPendingEdit_SongPendingEditId",
                        column: x => x.SongPendingEditId,
                        principalTable: "AudiosPendingEdit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SongPlaylist",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PlaylistId = table.Column<int>(nullable: true),
                    SongId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SongPlaylist", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SongPlaylist_Playlists_PlaylistId",
                        column: x => x.PlaylistId,
                        principalTable: "Playlists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SongPlaylist_Audios_SongId",
                        column: x => x.SongId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SongPlaylist_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId",
                unique: true,
                filter: "[YearsActiveId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_AlbumId",
                table: "Audios",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistAlbum_AlbumId",
                table: "ArtistAlbum",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistAlbum_ArtistId",
                table: "ArtistAlbum",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistSong_ArtistId",
                table: "ArtistSong",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistSong_SongId",
                table: "ArtistSong",
                column: "SongId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistSong_SongPendingEditId",
                table: "ArtistSong",
                column: "SongPendingEditId");

            migrationBuilder.CreateIndex(
                name: "IX_AudiosPendingEdit_AudioId",
                table: "AudiosPendingEdit",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudiosPendingEdit_ContributorId",
                table: "AudiosPendingEdit",
                column: "ContributorId");

            migrationBuilder.CreateIndex(
                name: "IX_AudiosPendingEdit_GenreId",
                table: "AudiosPendingEdit",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_AudiosPendingEdit_AlbumId",
                table: "AudiosPendingEdit",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_Playlists_UserId",
                table: "Playlists",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SongPlaylist_PlaylistId",
                table: "SongPlaylist",
                column: "PlaylistId");

            migrationBuilder.CreateIndex(
                name: "IX_SongPlaylist_SongId",
                table: "SongPlaylist",
                column: "SongId");

            migrationBuilder.CreateIndex(
                name: "IX_SongPlaylist_UserId",
                table: "SongPlaylist",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_YearsActive_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId",
                principalTable: "YearsActive",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Audios_AlbumId",
                table: "Audios",
                column: "AlbumId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
