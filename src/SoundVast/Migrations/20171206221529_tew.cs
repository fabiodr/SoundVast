using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class tew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
