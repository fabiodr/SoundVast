using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SoundVast.Migrations
{
    public partial class ewqw : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AudioRatingJoin");

            migrationBuilder.CreateTable(
                name: "AudioRatingJoin<AudioRating>",
                columns: table => new
                {
                    AudioId = table.Column<int>(nullable: false),
                    AudioRatingId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudioRatingJoin<AudioRating>", x => new { x.AudioId, x.AudioRatingId });
                    table.ForeignKey(
                        name: "FK_AudioRatingJoin<AudioRating>_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudioRatingJoin<AudioRating>_Ratings_AudioRatingId",
                        column: x => x.AudioRatingId,
                        principalTable: "Ratings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin<AudioRating>_AudioId",
                table: "AudioRatingJoin<AudioRating>",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin<AudioRating>_AudioRatingId",
                table: "AudioRatingJoin<AudioRating>",
                column: "AudioRatingId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AudioRatingJoin<AudioRating>");

            migrationBuilder.CreateTable(
                name: "AudioRatingJoin",
                columns: table => new
                {
                    AudioId = table.Column<int>(nullable: false),
                    AudioRatingId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudioRatingJoin", x => new { x.AudioId, x.AudioRatingId });
                    table.ForeignKey(
                        name: "FK_AudioRatingJoin_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudioRatingJoin_Ratings_AudioRatingId",
                        column: x => x.AudioRatingId,
                        principalTable: "Ratings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin_AudioId",
                table: "AudioRatingJoin",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin_AudioRatingId",
                table: "AudioRatingJoin",
                column: "AudioRatingId");
        }
    }
}
