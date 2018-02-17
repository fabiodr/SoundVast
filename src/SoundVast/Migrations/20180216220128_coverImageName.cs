using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class coverImageName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImageUrl",
                table: "Genres");

            migrationBuilder.DropColumn(
                name: "CoverImageUrl",
                table: "Audios");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageName",
                table: "Genres",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageName",
                table: "Audios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImageName",
                table: "Genres");

            migrationBuilder.DropColumn(
                name: "CoverImageName",
                table: "Audios");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageUrl",
                table: "Genres",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CoverImageUrl",
                table: "Audios",
                nullable: false,
                defaultValue: "");
        }
    }
}
