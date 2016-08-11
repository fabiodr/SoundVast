using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using SoundVast.CustomHelpers;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
using System.Net;
using SoundVast.Controllers;
using System.Text.RegularExpressions;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoundVast.ServiceLayer;
using SoundVast.Repository;
using Quartz.Util;
using SoundVast.Data;
using SoundVast.Filters;
using SoundVast.Models.AudioViewModels;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.FileStreamViewModels;
using SoundVast.QueryOptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using SoundVast.Models.IdentityModels;
using DateFrom = SoundVast.Utilities.DateFrom;
using FileStream = SoundVast.Models.FileStreamModels.FileStream;
using Stream = SoundVast.Utilities.Stream;
using Microsoft.AspNetCore.Identity;
using SoundVast.Models;

namespace SoundVast.Controllers
{
    public class FileStreamController : AudioController<FileStream, FileStreamCategory, FileStreamGenre, FileStreamReport>
    {
        private readonly IFileStreamService _fileStreamService;
        private readonly IAzureConfig _azureConfig;

        public FileStreamController(
            IMapper mapper,
            IServiceProvider serviceProvider,
            IAzureConfig azureConfig,
            IFileStreamService fileStreamService,
            ICategoryService<FileStreamCategory> categoryService,
            IGenreService<FileStreamGenre> genreService,
            IReportService<FileStreamReport> reportService,
            IRatingService<AudioRating> ratingService,
            UserManager<ApplicationUser> userManager)
            : base(mapper, serviceProvider, fileStreamService, categoryService, genreService, reportService, ratingService, userManager)
        {
            _fileStreamService = fileStreamService;
            _azureConfig = azureConfig;
        }

        [HttpPost]
        public JsonResult Playlist(int id)
        {
            var playlistData = new List<object>();

            foreach (var audio in _fileStreamService.GetPlaylist(id, Audio.PlaylistCount,
                HttpContext.Session.GetString("Category"), HttpContext.Session.GetString("Genre")))
            {
                playlistData.Add(new
                {
                    id = audio.Id,
                    title = audio.Name,
                    artist = audio.Artist,
                    mp3 = Url.Action("Stream", new { id = audio.Id }),
                    poster = _azureConfig.ContainerImage.GetBlockBlobReference(audio.ImageFile.Name).Uri.AbsoluteUri,
                    comment = @Url.Action("CommentsSideBar", "Comment", new { audioId = audio.Id })
                });
            }
            return Json(playlistData);
        }

        public IActionResult Genres()
        {
            return ViewOrPartial("Audio/Genres", Genres<GenreViewModel>());
        }

        public IActionResult Categories()
        {
            return ViewOrPartial("Audio/Categories", Categories<CategoryViewModel>());
        }

        [Route("Newest/{category}/{genre?}")]
        public IActionResult Newest(string genre, string category = "Song")
        {
            return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, DateTimeOffset>(DateFrom.AllTime, genre, category, " Newest ",
                x => x.UploadDate));
        }

        [Route("Most-Played/{dateFrom}/{category}/{genre?}")]
        public IActionResult MostPlayed(DateFrom dateFrom, string genre, string category = "Song")
        {
            return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Most Played ", x => x.UniqueViews));
        }

        [Route("Most-Commented/{dateFrom}/{category}/{genre?}")]
        public IActionResult MostCommented(DateFrom dateFrom, string genre, string category = "Song")
        {
            return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Top Commented ", x => x.CommentCount));
        }

        [Route("Top-Rated/{dateFrom}/{category}/{genre?}")]
        public IActionResult TopRated(DateFrom dateFrom, string genre, string category = "Song")
        {
            return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Top Rated ", x => x.CommentCount /*x => x.Rating.Likes*/));
        }

        public IActionResult FileStreams(string genre, string category = "Song", int pageNumber = 1)
        {
            ViewBag.SortingText = genre + " audios in the " + category + " category";

            return ViewOrPartial("Audio/Audios", Audios<FileStreamsViewModel>(genre, category, pageNumber));
        }

        //[AjaxAuthorize(Roles = "Admin")]
        //public IActionResult ReportFileStreams(int pageNumber = 1)
        //{
        //    return ViewOrPartial("Audios", Reports<ReportsViewModel>());
        //}

        [AjaxAuthorize]
        public PartialViewResult RequestDeletion(int id)
        {
            var otherFileStreamSelectListViewModels = Mapper.Map<IEnumerable<OtherFileStreamSelectListViewModel>>(_fileStreamService.GetAudios()
                                            .AsQueryable().WithWhere(new WhereOption<FileStream>(x => x.Id != id)));

            var selectList = new SelectList(otherFileStreamSelectListViewModels, "Id", "Name", null);

            return PartialView("_RequestDeletion", RequestDeletion<ReportCreateViewModel>(id, selectList));
        }

        [Authorize]
        [HttpPost]
        public IActionResult RequestDeletion(ReportCreateViewModel reportCreateViewModel)
        {
            RequestDeletion(reportCreateViewModel, new FileStreamReport());

            return RedirectToLocal("");
        }

        public Stream Stream(int id)
        {
            var fileStream = _fileStreamService.GetAudio(id, stream => stream.AudioFile);

            Response.Headers.Add("Content-Disposition", "attachment; filename=" + fileStream.AudioFile.Name);

            return new Stream(_azureConfig, fileStream.AudioFile.Name);
        }

        public Stream Download(int id)
        {
            var fileStream = _fileStreamService.GetAudio(id, stream => stream.AudioFile);

            Response.Headers.Add("Content-Disposition", "attachment; filename=" + fileStream.AudioFile.Name);
            return new Stream(_azureConfig, fileStream.AudioFile.Name);
        }
    }
}