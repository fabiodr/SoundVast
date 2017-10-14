using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Genres_GenreId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Audios",
                table: "Audios");

            migrationBuilder.RenameTable(
                name: "Audios",
                newName: "Audio");

            migrationBuilder.RenameIndex(
                name: "IX_Audios_GenreId",
                table: "Audio",
                newName: "IX_AudioModel_GenreId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AudioModel",
                table: "Audio",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AudioModel_Genres_GenreId",
                table: "Audio",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_AudioModel_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AudioModel_Genres_GenreId",
                table: "Audio");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_AudioModel_AudioId",
                table: "Ratings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AudioModel",
                table: "Audio");

            migrationBuilder.RenameTable(
                name: "Audio",
                newName: "Audios");

            migrationBuilder.RenameIndex(
                name: "IX_AudioModel_GenreId",
                table: "Audios",
                newName: "IX_Audios_GenreId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Audios",
                table: "Audios",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Genres_GenreId",
                table: "Audios",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
