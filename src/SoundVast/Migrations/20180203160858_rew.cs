using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class rew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AudioGenre_Genre_GenreId",
                table: "AudioGenre");

            migrationBuilder.DropForeignKey(
                name: "FK_AudiosPendingEdit_Genre_GenreId",
                table: "AudiosPendingEdit");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Genre",
                table: "Genre");

            migrationBuilder.RenameTable(
                name: "Genre",
                newName: "Genres");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Genres",
                table: "Genres",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AudioGenre_Genres_GenreId",
                table: "AudioGenre",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AudiosPendingEdit_Genres_GenreId",
                table: "AudiosPendingEdit",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AudioGenre_Genres_GenreId",
                table: "AudioGenre");

            migrationBuilder.DropForeignKey(
                name: "FK_AudiosPendingEdit_Genres_GenreId",
                table: "AudiosPendingEdit");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Genres",
                table: "Genres");

            migrationBuilder.RenameTable(
                name: "Genres",
                newName: "Genre");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Genre",
                table: "Genre",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AudioGenre_Genre_GenreId",
                table: "AudioGenre",
                column: "GenreId",
                principalTable: "Genre",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AudiosPendingEdit_Genre_GenreId",
                table: "AudiosPendingEdit",
                column: "GenreId",
                principalTable: "Genre",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
