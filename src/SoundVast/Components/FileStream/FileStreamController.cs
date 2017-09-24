using System;
using System.Collections;
using System.Collections.Generic;


namespace SoundVast.Components.FileStream
{
    //public class FileStreamController : AudioController<FileStreamModel, FileStreamCategoryModel, FileStreamGenreModel, FileStreamReportModel>
    //{
    //    private readonly IFileStreamService _fileStreamService;
    //    private readonly ICloudStorage _cloudStorage;

    //    public FileStreamController(
    //        IMapper mapper,
    //        IServiceProvider serviceProvider,
    //        ICloudStorage cloudStorage,
    //        IFileStreamService fileStreamService,
    //        ICategoryService<FileStreamCategoryModel> categoryService,
    //        IGenreService genreService,
    //        IReportService<FileStreamReportModel> reportService,
    //        IRatingService<AudioRatingModel> ratingService,
    //        UserManager<ApplicationUser> userManager)
    //        : base(mapper, serviceProvider, fileStreamService, categoryService, genreService, reportService, ratingService, userManager)
    //    {
    //        _fileStreamService = fileStreamService;
    //        _cloudStorage = cloudStorage;
    //    }

    //    //[HttpPost]
    //    //public JsonResult Playlist(int id)
    //    //{
    //    //    var playlistData = new List<object>();

    //    //    foreach (var audio in _fileStreamService.GetPlaylist(id, AudioModel.PlaylistCount,
    //    //        HttpContext.Session.GetString("Category"), HttpContext.Session.GetString("Genre")))
    //    //    {
    //    //        var fileProperties = _cloudStorage.GetBlob(CloudStorageType.Image, audio.ImageFile.Name).FileProperties;

    //    //        playlistData.Add(new
    //    //        {
    //    //            id = audio.Id,
    //    //            title = audio.Name,
    //    //            artist = audio.Artist,
    //    //            mp3 = Url.Action("Stream", new { id = audio.Id }),
    //    //            poster = fileProperties.Uri.AbsoluteUri,
    //    //            comment = Url.Action("CommentsSideBar", "Comment", new { audioId = audio.Id })
    //    //        });
    //    //    }
    //    //    return Json(playlistData);
    //    //}

    //    //public IActionResult Genres()
    //    //{
    //    //    return ViewOrPartial("Audio/Genres", Genres<GenreViewModel>());
    //    //}

    //    public IActionResult Categories()
    //    {
    //        return ViewOrPartial("Audio/Categories", Categories<CategoryViewModel>());
    //    }

    //    //[Route("Newest/{category}/{genre?}")]
    //    //public IActionResult Newest(string genre, string category = "Song")
    //    //{
    //    //    return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, DateTimeOffset>(DateFrom.AllTime, genre, category, " Newest ",
    //    //        x => x.UploadDate));
    //    //}

    //    //[Route("Most-Played/{dateFrom}/{category}/{genre?}")]
    //    //public IActionResult MostPlayed(DateFrom dateFrom, string genre, string category = "Song")
    //    //{
    //    //    return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Most Played ", x => x.UniqueViews));
    //    //}

    //    //[Route("Most-Commented/{dateFrom}/{category}/{genre?}")]
    //    //public IActionResult MostCommented(DateFrom dateFrom, string genre, string category = "Song")
    //    //{
    //    //    return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Top Commented ", x => x.CommentCount));
    //    //}

    //    //[Route("Top-Rated/{dateFrom}/{category}/{genre?}")]
    //    //public IActionResult TopRated(DateFrom dateFrom, string genre, string category = "Song")
    //    //{
    //    //    return ViewOrPartial("Audio/Audios", Sort<FileStreamsViewModel, int>(dateFrom, genre, category, " Top Rated ", x => x.CommentCount /*x => x.Rating.Likes*/));
    //    //}

    //    public IActionResult Index()
    //    {
    //        return ViewOrPartial();
    //    }

    //    //public JsonResult FileStreams(string genre, string category = "Song", int pageNumber = 1)
    //    //{
    //    //    ViewBag.SortingText = genre + " audios in the " + category + " category";

    //    //    return Json(Audios<FileStreamsViewModel>(genre, category, pageNumber));
    //    //    //  return ViewOrPartial("Audio/Audios", Audios<FileStreamsViewModel>(genre, category, pageNumber));
    //    //}

    //    //[AjaxAuthorize(Roles = "Admin")]
    //    //public IActionResult ReportFileStreams(int pageNumber = 1)
    //    //{
    //    //    return ViewOrPartial("Audios", Reports<ReportsViewModel>());
    //    //}

    //    [AjaxAuthorize]
    //    public PartialViewResult RequestDeletion(int id)
    //    {
    //        var otherFileStreamSelectListViewModels = Mapper.Map<IEnumerable<OtherFileStreamSelectListViewModel>>(_fileStreamService.GetAudios()
    //                                        .AsQueryable().Where(new WhereOption<FileStreamModel>(x => x.Id != id).WhereExpression));

    //        var selectList = new SelectList(otherFileStreamSelectListViewModels, "Id", "Name", null);

    //        return PartialView("_RequestDeletion", RequestDeletion<ReportCreateViewModel>(id, selectList));
    //    }

    //    [Authorize]
    //    [HttpPost]
    //    public IActionResult RequestDeletion(ReportCreateViewModel reportCreateViewModel)
    //    {
    //        RequestDeletion(reportCreateViewModel, new FileStreamReportModel());

    //        return RedirectToLocal("");
    //    }

    //    //public Stream Stream(int id)
    //    //{
    //    //    var fileStream = _fileStreamService.GetAudio(id, stream => stream.AudioFile);

    //    //    Response.Headers.Add("Content-Disposition", "attachment; filename=" + fileStream.AudioFile.Name);

    //    //    return new Stream(_cloudStorage, fileStream.AudioFile.Name);
    //    //}

    //    //public Stream Download(int id)
    //    //{
    //    //    var fileStream = _fileStreamService.GetAudio(id, stream => stream.AudioFile);

    //    //    Response.Headers.Add("Content-Disposition", "attachment; filename=" + fileStream.AudioFile.Name);
    //    //    return new Stream(_cloudStorage, fileStream.AudioFile.Name);
    //    //}
    //}
}