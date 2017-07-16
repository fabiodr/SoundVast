using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SoundVast.Migrations
{
    public partial class Refactored : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Categories_CategoryId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Files_ImageFileId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_RatingCount_RatingCountId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_AspNetUsers_UserId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Audios_Files_AudioFileId",
                table: "Audios");

            migrationBuilder.DropForeignKey(
                name: "FK_Genres_Categories_CategoryId",
                table: "Genres");

            migrationBuilder.DropForeignKey(
                name: "FK_Genres_Files_ImageFileId",
                table: "Genres");

            migrationBuilder.DropTable(
                name: "CommentRatingJoin");

            migrationBuilder.DropTable(
                name: "AudioGenres");

            migrationBuilder.DropTable(
                name: "AudioRatingJoin");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Links");

            migrationBuilder.DropTable(
                name: "Quotes");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropTable(
                name: "Files");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "RatingCount");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUserRoles_UserId",
                table: "AspNetUserRoles");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.DropIndex(
                name: "IX_Genres_CategoryId",
                table: "Genres");

            migrationBuilder.DropIndex(
                name: "IX_Genres_ImageFileId",
                table: "Genres");

            migrationBuilder.DropIndex(
                name: "IX_Audios_CategoryId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_ImageFileId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_RatingCountId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_UserId",
                table: "Audios");

            migrationBuilder.DropIndex(
                name: "IX_Audios_AudioFileId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Genres");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Genres");

            migrationBuilder.DropColumn(
                name: "ImageFileId",
                table: "Genres");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "CommentCount",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "ImageFileId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "RatingCountId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "UniqueViews",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "UploadDate",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Album",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Duration",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "Lyrics",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Audios");

            migrationBuilder.DropColumn(
                name: "AudioUrl",
                table: "Audios");

            migrationBuilder.RenameColumn(
                name: "WebsiteUrl",
                table: "Audios",
                newName: "CoverImageUrl");

            migrationBuilder.RenameColumn(
                name: "AudioFileId",
                table: "Audios",
                newName: "GenreId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.RenameColumn(
                name: "GenreId",
                table: "Audios",
                newName: "AudioFileId");

            migrationBuilder.RenameColumn(
                name: "CoverImageUrl",
                table: "Audios",
                newName: "WebsiteUrl");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Genres",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Genres",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "ImageFileId",
                table: "Genres",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CommentCount",
                table: "Audios",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Audios",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "ImageFileId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RatingCountId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UniqueViews",
                table: "Audios",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "UploadDate",
                table: "Audios",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Album",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "Duration",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lyrics",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ReleaseDate",
                table: "Audios",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AudioUrl",
                table: "Audios",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AudioGenres",
                columns: table => new
                {
                    AudioId = table.Column<int>(nullable: false),
                    GenreId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AudioGenres", x => new { x.AudioId, x.GenreId });
                    table.ForeignKey(
                        name: "FK_AudioGenres_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AudioGenres_Genres_GenreId",
                        column: x => x.GenreId,
                        principalTable: "Genres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Discriminator = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Links",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FileStreamId = table.Column<int>(nullable: true),
                    LinkUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Links", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Links_Audios_FileStreamId",
                        column: x => x.FileStreamId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Quotes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Quotation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quotes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Discriminator = table.Column<string>(nullable: false),
                    Liked = table.Column<bool>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ratings_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RatingCount",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Dislikes = table.Column<int>(nullable: false),
                    Likes = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RatingCount", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Discriminator = table.Column<string>(nullable: false),
                    ImageFileId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Categories_Files_ImageFileId",
                        column: x => x.ImageFileId,
                        principalTable: "Files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AudioId = table.Column<int>(nullable: true),
                    Body = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    OriginalCommentId = table.Column<int>(nullable: true),
                    RatingCountId = table.Column<int>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Comments_OriginalCommentId",
                        column: x => x.OriginalCommentId,
                        principalTable: "Comments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_RatingCount_RatingCountId",
                        column: x => x.RatingCountId,
                        principalTable: "RatingCount",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CommentRatingJoin",
                columns: table => new
                {
                    CommentId = table.Column<int>(nullable: false),
                    CommentRatingId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommentRatingJoin", x => new { x.CommentId, x.CommentRatingId });
                    table.ForeignKey(
                        name: "FK_CommentRatingJoin_Comments_CommentId",
                        column: x => x.CommentId,
                        principalTable: "Comments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CommentRatingJoin_Ratings_CommentRatingId",
                        column: x => x.CommentRatingId,
                        principalTable: "Ratings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdditionalDetails = table.Column<string>(nullable: true),
                    AudioId = table.Column<int>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    Reason = table.Column<string>(nullable: true),
                    CommentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reports_Audios_AudioId",
                        column: x => x.AudioId,
                        principalTable: "Audios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reports_Comments_CommentId",
                        column: x => x.CommentId,
                        principalTable: "Comments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_UserId",
                table: "AspNetUserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName");

            migrationBuilder.CreateIndex(
                name: "IX_Genres_CategoryId",
                table: "Genres",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Genres_ImageFileId",
                table: "Genres",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_CategoryId",
                table: "Audios",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_ImageFileId",
                table: "Audios",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_RatingCountId",
                table: "Audios",
                column: "RatingCountId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_UserId",
                table: "Audios",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Audios_AudioFileId",
                table: "Audios",
                column: "AudioFileId");

            migrationBuilder.CreateIndex(
                name: "IX_CommentRatingJoin_CommentId",
                table: "CommentRatingJoin",
                column: "CommentId");

            migrationBuilder.CreateIndex(
                name: "IX_CommentRatingJoin_CommentRatingId",
                table: "CommentRatingJoin",
                column: "CommentRatingId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioGenres_AudioId",
                table: "AudioGenres",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioGenres_GenreId",
                table: "AudioGenres",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin_AudioId",
                table: "AudioRatingJoin",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_AudioRatingJoin_AudioRatingId",
                table: "AudioRatingJoin",
                column: "AudioRatingId");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_ImageFileId",
                table: "Categories",
                column: "ImageFileId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AudioId",
                table: "Comments",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_OriginalCommentId",
                table: "Comments",
                column: "OriginalCommentId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_RatingCountId",
                table: "Comments",
                column: "RatingCountId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserId",
                table: "Comments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Links_FileStreamId",
                table: "Links",
                column: "FileStreamId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_UserId",
                table: "Ratings",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_AudioId",
                table: "Reports",
                column: "AudioId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_CommentId",
                table: "Reports",
                column: "CommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Categories_CategoryId",
                table: "Audios",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Files_ImageFileId",
                table: "Audios",
                column: "ImageFileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_RatingCount_RatingCountId",
                table: "Audios",
                column: "RatingCountId",
                principalTable: "RatingCount",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_AspNetUsers_UserId",
                table: "Audios",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Audios_Files_AudioFileId",
                table: "Audios",
                column: "AudioFileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Genres_Categories_CategoryId",
                table: "Genres",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Genres_Files_ImageFileId",
                table: "Genres",
                column: "ImageFileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
