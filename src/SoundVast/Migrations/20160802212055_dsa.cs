using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class dsa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId1",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_AudioId1",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "AudioId1",
                table: "Ratings");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "AudioId1",
                table: "Ratings",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_AudioId1",
                table: "Ratings",
                column: "AudioId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId1",
                table: "Ratings",
                column: "AudioId1",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
