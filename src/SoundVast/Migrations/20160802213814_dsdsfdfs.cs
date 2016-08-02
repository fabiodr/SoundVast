using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class dsdsfdfs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

            migrationBuilder.DropIndex(
                name: "IX_Ratings_AudioId",
                table: "Ratings");

            migrationBuilder.DropColumn(
                name: "AudioId",
                table: "Ratings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AudioId",
                table: "Ratings",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_AudioId",
                table: "Ratings",
                column: "AudioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
