using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class re : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Genre_GenreId",
                table: "Audios");

            migrationBuilder.DropTable(
                name: "AlbumGenre");

            migrationBuilder.DropTable(
                name: "ArtistGenre");

            migrationBuilder.DropIndex(
                name: "IX_Audios_GenreId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "GenreId",
                table: "Audios");

            migrationBuilder.CreateTable(
                name: "AlbumSongGenre",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlbumId = table.Column<int>(type: "int", nullable: false),
                    SongGenreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlbumSongGenre", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AlbumSongGenre_Audios_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlbumSongGenre_Genre_SongGenreId",
                        column: x => x.SongGenreId,
                        principalTable: "Genre",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArtistSongGenre",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArtistId = table.Column<int>(type: "int", nullable: false),
                    SongGenreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtistSongGenre", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArtistSongGenre_Audios_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtistSongGenre_Genre_SongGenreId",
                        column: x => x.SongGenreId,
                        principalTable: "Genre",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AudioGenre",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AudioId = table.Column<int>(type: "int", nullable: false),
                    GenreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudioGenre", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AudioGenre_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudioGenre_Genre_GenreId",
                        column: x => x.GenreId,
                        principalTable: "Genre",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AlbumSongGenre_AlbumId",
                table: "AlbumSongGenre",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_AlbumSongGenre_SongGenreId",
                table: "AlbumSongGenre",
                column: "SongGenreId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistSongGenre_ArtistId",
                table: "ArtistSongGenre",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistSongGenre_SongGenreId",
                table: "ArtistSongGenre",
                column: "SongGenreId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioGenre_AudioId",
                table: "AudioGenre",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioGenre_GenreId",
                table: "AudioGenre",
                column: "GenreId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AlbumSongGenre");

            migrationBuilder.DropTable(
                name: "ArtistSongGenre");

            migrationBuilder.DropTable(
                name: "AudioGenre");

            migrationBuilder.AddColumn<int>(
                name: "GenreId",
                table: "Audios",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AlbumGenre",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlbumId = table.Column<int>(nullable: false),
                    SongGenreId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlbumGenre", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AlbumGenre_Audios_AlbumId",
                        column: x => x.AlbumId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlbumGenre_Genre_SongGenreId",
                        column: x => x.SongGenreId,
                        principalTable: "Genre",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArtistGenre",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArtistId = table.Column<int>(nullable: false),
                    SongGenreId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtistGenre", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArtistGenre_Audios_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtistGenre_Genre_SongGenreId",
                        column: x => x.SongGenreId,
                        principalTable: "Genre",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Audios_GenreId",
                table: "Audios",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_AlbumGenre_AlbumId",
                table: "AlbumGenre",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_AlbumGenre_SongGenreId",
                table: "AlbumGenre",
                column: "SongGenreId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistGenre_ArtistId",
                table: "ArtistGenre",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtistGenre_SongGenreId",
                table: "ArtistGenre",
                column: "SongGenreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Genre_GenreId",
                table: "Audios",
                column: "GenreId",
                principalTable: "Genre",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
