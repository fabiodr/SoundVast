using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class d : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Ratings_RatingId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_CommentId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Comments_RatingId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Audios_RatingId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "RatingId",
                table: "Audios");

            migrationBuilder.AddColumn<int>(
                name: "AudioId",
                table: "Reports",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AudioId1",
                table: "Ratings",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reports_AudioId",
                table: "Reports",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_AudioId1",
                table: "Ratings",
                column: "AudioId1");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_RatingId",
                table: "Comments",
                column: "RatingId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId1",
                table: "Ratings",
                column: "AudioId1",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_Audios_AudioId",
                table: "Reports",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId1",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Audios_AudioId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_Reports_AudioId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_AudioId1",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Comments_RatingId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "AudioId",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "AudioId1",
                table: "Ratings");

            migrationBuilder.AddColumn<int>(
                name: "CommentId",
                table: "Ratings",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RatingId",
                table: "Audios",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_CommentId",
                table: "Ratings",
                column: "CommentId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_RatingId",
                table: "Comments",
                column: "RatingId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_RatingId",
                table: "Audios",
                column: "RatingId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Ratings_RatingId",
                table: "Audios",
                column: "RatingId",
                principalTable: "Ratings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
