using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class addedGenreModelToAudioModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Audios_GenreId",
                table: "Audios",
                column: "GenreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Genres_GenreId",
                table: "Audios",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Genres_GenreId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_GenreId",
                table: "Audios");
        }
    }
}
