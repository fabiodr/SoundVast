using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class addCascadeRatings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings",
                column: "AudioId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Audios_AudioId",
                table: "Ratings");

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
