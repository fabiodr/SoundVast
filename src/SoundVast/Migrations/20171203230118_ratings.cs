using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class ratings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Ratings_RatingId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_RatingId",
                table: "Comments");

            migrationBuilder.AddColumn<int>(
                name: "CommentId",
                table: "Ratings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_CommentId",
                table: "Ratings",
                column: "CommentId");

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
                name: "FK_Ratings_Comments_CommentId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_CommentId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Ratings");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_RatingId",
                table: "Comments",
                column: "RatingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Ratings_RatingId",
                table: "Comments",
                column: "RatingId",
                principalTable: "Ratings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
