using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class reew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SongPlaylist_Audios_SongId",
                table: "SongPlaylist");

            migrationBuilder.AlterColumn<int>(
                name: "SongId",
                table: "SongPlaylist",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SongPlaylist_Audios_SongId",
                table: "SongPlaylist",
                column: "SongId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SongPlaylist_Audios_SongId",
                table: "SongPlaylist");

            migrationBuilder.AlterColumn<int>(
                name: "SongId",
                table: "SongPlaylist",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_SongPlaylist_Audios_SongId",
                table: "SongPlaylist",
                column: "SongId",
                principalTable: "Audios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
