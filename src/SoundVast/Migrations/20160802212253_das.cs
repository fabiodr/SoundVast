using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class das : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_FileStreamId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_FileStreamId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "FileStreamId",
                table: "Ratings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FileStreamId",
                table: "Ratings",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_FileStreamId",
                table: "Ratings",
                column: "FileStreamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_FileStreamId",
                table: "Ratings",
                column: "FileStreamId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
