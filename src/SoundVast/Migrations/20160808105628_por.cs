using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class por : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RatingCountId",
                table: "Audios",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Audios_RatingCountId",
                table: "Audios",
                column: "RatingCountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_RatingCount_RatingCountId",
                table: "Audios",
                column: "RatingCountId",
                principalTable: "RatingCount",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_RatingCount_RatingCountId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_RatingCountId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "RatingCountId",
                table: "Audios");
        }
    }
}
