using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class weewrew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId",
                unique: true,
                filter: "[YearsActiveId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_YearsActiveId",
                table: "Audios",
                column: "YearsActiveId");
        }
    }
}
