using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SoundVast.Migrations
{
    public partial class das : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "SongPlaylist",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SongPlaylist_UserId",
                table: "SongPlaylist",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_SongPlaylist_AspNetUsers_UserId",
                table: "SongPlaylist",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SongPlaylist_AspNetUsers_UserId",
                table: "SongPlaylist");

            migrationBuilder.DropIndex(
                name: "IX_SongPlaylist_UserId",
                table: "SongPlaylist");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "SongPlaylist");
        }
    }
}
