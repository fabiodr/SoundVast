using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class wewe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "ReleaseDate",
                table: "Audios",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "YearsActiveId",
                table: "Audios",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "Song_ReleaseDate",
                table: "Audios",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "YearsActive",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EndYear = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    StartYear = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_YearsActive", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_YearsActive_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId",
                principalTable: "YearsActive",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_YearsActive_YearsActiveId",
                table: "Audios");

            migrationBuilder.DropTable(
                name: "YearsActive");

            migrationBuilder.DropIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "YearsActiveId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Song_ReleaseDate",
                table: "Audios");
        }
    }
}
