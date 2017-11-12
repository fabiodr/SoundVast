using SoundVast.CustomHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Web;
using SoundVast.QueryOptions;
using SoundVast.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Audio
{
    //public abstract class AudioController<TAudio, TCategory, TGenre, TReport> : CustomBaseController
    //    where TAudio : Audio, new()
    //    where TCategory : CategoryModel, new()
    //    where TGenre : Genre, new()
    //    where TReport : ReportModel, new()
    //{
    //    private readonly IAudioService<TAudio> _audioService;
    //    private readonly ICategoryService<TCategory> _categoryService;
    //    private readonly IGenreService _genreService;
    //    private readonly IReportService<TReport> _reportService;
    //    private readonly IRatingService<AudioRatingModel> _ratingService;
    //    private readonly UserManager<ApplicationUser> _userManager;

    //    protected AudioController() 
    //    {
    //    }

    //    protected AudioController(IMapper mapper, IServiceProvider serviceProvider, IAudioService<TAudio> audioService, 
    //        ICategoryService<TCategory> categoryService, IGenreService genreService, IReportService<TReport> reportservice,
    //        IRatingService<AudioRatingModel> ratingService, UserManager<ApplicationUser> userManager)
    //        : base(mapper, serviceProvider)
    //    {
    //        _audioService = audioService;
    //        _categoryService = categoryService;
    //        _genreService = genreService;
    //        _reportService = reportservice;
    //        _ratingService = ratingService;
    //        _userManager = userManager;
    //    }

    //    //public JsonResult Playlist(int id)
    //    //{
    //    //    var playlistData = new List<object>(DomainModels.Audio.PlaylistCount);

    //    //    var audiosInPlaylist = _audioService.GetAudio(id).SimilarAudios;

    //    //    foreach (var audio in audiosInPlaylist)
    //    //    {
    //    //        var fileStream = audio as FileStream;
    //    //        var liveStream = audio as LiveStream;

    //    //        string redirectUrl = null;

    //    //        if (fileStream != null)
    //    //        {
    //    //            redirectUrl = Url.Action("FileStream", new { id = audio.Id, audioName = audio.Name.ToUrlFriendlyString() });
    //    //        }

    //    //        if (liveStream != null)
    //    //        {
    //    //            redirectUrl = Url.Action("LiveStream", new { id = audio.Id, audioName = audio.Name.ToUrlFriendlyString() });
    //    //        }

    //    //        playlistData.Add(new
    //    //        {
    //    //            id = audio.Id,
    //    //            artist = fileStream?.Artists,
    //    //            title = audio.Name,
    //    //            poster = AzureConfig.ContainerImage.GetBlockBlobReference(audio.ImageFile.Name).Uri.AbsoluteUri,
    //    //            mp3 = Url.Action("Stream", new { id = audio.Id }),
    //    //            redirectUrl
    //    //        });
    //    //    }

    //    //    return Json(playlistData, JsonRequestBehavior.AllowGet);
    //    //}

    //    //[HttpPost]
    //    //[Authorize]
    //    //[ValidateAntiForgeryToken]
    //    //public PartialViewResult CreatePlaylist(CreatePlaylistViewModel createPlaylistViewModel)
    //    //{
    //    //    var audio = _audioService.GetAudio(createPlaylistViewModel.AudioViewModel.Id);
    //    //    var user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<UserManager>();

    //    //    var playlist = new Playlist()
    //    //    {
    //    //        Name = createPlaylistViewModel.Name,
    //    //        ImageFile = audio.ImageFile,
    //    //        Genres = _genreService.GetSelectedGenres(createPlaylistViewModel.SelectedGenreIds),
    //    //        SimilarAudios = new List<DomainModels.Audio> { audio },
    //    //        User = user.FindById(User.Identity.GetUserId())
    //    //    };

    //    //    _audioService.Add(playlist);

    //    //    var playlistViewModel = Mapper.Map<Playlist, PlaylistViewModel>(playlist);

    //    //    return PartialView("_Playlist", playlistViewModel);
    //    //}

    //    //[HttpPost]
    //    //public JsonResult IncrementView(int id)
    //    //{
    //    //    var audio = _audioService.GetAudio(id);

    //    //    _audioService.IncrementView(audio);

    //    //    return Json(new { audio.UniqueViews });
    //    //}

    //    //[HttpPost]
    //    //public async Task<JsonResult> Rate(int id, bool liked)
    //    //{
    //    //    var currentUser = await _userManager.GetUserAsync(User);
    //    //    var audio = _audioService.GetAudioForRating(id);
    //    //    var existingRating = audio.AudioRatingJoins.SingleOrDefault(x => x.AudioRating.User.Id == currentUser.Id && x.Audio.Id == id);

    //    //    var newRating = new AudioRatingModel
    //    //    {
    //    //        AudioRatingJoins = new List<AudioRatingJoinModel>(),
    //    //        User = currentUser,
    //    //        Liked = liked
    //    //    };

    //    //    newRating.AudioRatingJoins.Add(new AudioRatingJoinModel { Audio = audio, AudioRating = newRating });

    //    //    _ratingService.Add(audio.RatingCount, newRating, existingRating?.AudioRating, liked);

    //    //    return Json(audio.RatingCount);
    //    //}

    //    //public IActionResult Search(SearchViewModel searchViewModel)
    //    //{
    //    //    switch (searchViewModel.SelectedFilter)
    //    //    {
    //    //        case SelectedFilter.None:
    //    //            var audiosViewModels = new List<AudiosViewModel>();
    //    //            var audios = _audioService.GetAudios();
    //    //            var fileStreams = audios.OfType<FileStream>();
    //    //            var liveStreams = audios.OfType<LiveStream>();

    //    //            audiosViewModels.AddRange(Mapper.Map<IEnumerable<FileStreamsViewModel>>(fileStreams));
    //    //            audiosViewModels.AddRange(Mapper.Map<IEnumerable<LiveStreamsViewModel>>(liveStreams));

    //    //            foreach (var audiosViewModel in audiosViewModels)
    //    //            {
    //    //                audiosViewModel.LevenshteinScore = Levenshtein.iLD(audiosViewModel.Name, searchViewModel.Search.ToUrlFriendlyString());
    //    //            }
    //    //            audiosViewModels = audiosViewModels.AsQueryable().WithOrdering(new OrderingOption<AudiosViewModel, int>(x => x.LevenshteinScore)).ToList();

    //    //            return ViewOrPartial("Audios", audiosViewModels);
    //    //        case SelectedFilter.FileStreams:
    //    //            return RedirectToAction("Search", "FileStream", new { searchString = searchViewModel.Search.ToUrlFriendlyString() });
    //    //        case SelectedFilter.Albums:
    //    //            Response.StatusCode = (int)HttpStatusCode.InternalServerError;
    //    //            break;
    //    //        case SelectedFilter.Artists:
    //    //            Response.StatusCode = (int)HttpStatusCode.InternalServerError;
    //    //            break;
    //    //        case SelectedFilter.Stations:
    //    //            return RedirectToAction("Search", "LiveStream", new { searchString = searchViewModel.Search.ToUrlFriendlyString() });
    //    //        case SelectedFilter.Podcasts:
    //    //            Response.StatusCode = (int)HttpStatusCode.InternalServerError;
    //    //            break;
    //    //        default:
    //    //            throw new ArgumentOutOfRangeException(nameof(searchViewModel.SelectedFilter), searchViewModel.SelectedFilter, null);
    //    //    }
    //    //    return new EmptyResult();
    //    //}

    //    //protected virtual IEnumerable<TGenreViewModel> Genres<TGenreViewModel>()
    //    //    where TGenreViewModel : GenreViewModel
    //    //{
    //    //    return Mapper.Map<IEnumerable<TGenreViewModel>>(_genreService.GetGenresInCategory(HttpContext.Session.GetString("Category")));
    //    //}

    //    protected virtual IEnumerable<TCategoryViewModel> Categories<TCategoryViewModel>()
    //        where TCategoryViewModel : CategoryViewModel
    //    {
    //        return Mapper.Map<IEnumerable<TCategoryViewModel>>(_categoryService.GetCategories());
    //    }

    //    //protected virtual IEnumerable<TAudiosViewModel> Sort<TAudiosViewModel, TKey>(DateFrom dateFrom, string genre, string category, string concatText,
    //    //    Expression<Func<TAudio, TKey>> keySelector)
    //    //    where TAudiosViewModel : AudiosViewModel
    //    //{
    //    //    var date = DateTime.Now.AddDays((int)dateFrom * -1);
    //    //    var audios = _audioService.OrderAudiosInGenreAndCategoryFromDate(new OrderingOption<TAudio, TKey>(keySelector, true), date,
    //    //        category, genre);

    //    //    var filterEnumDisplayValue = EnumHelper<DateFrom>.GetDisplayValue(dateFrom);
    //    //    var allAudiosViewModels = Mapper.Map<IEnumerable<TAudio>, IEnumerable<TAudiosViewModel>>(audios);

    //    //    ViewBag.SortingText = filterEnumDisplayValue + concatText + genre + " " + category;

    //    //    return allAudiosViewModels;
    //    //}

    //    //protected virtual IEnumerable<TAudiosViewModel> Audios<TAudiosViewModel>(string genre, string category, int pageNumber = 1)
    //    //    where TAudiosViewModel : AudiosViewModel
    //    //{
    //    //    var audios = _audioService.GetAudiosInGenreAndCategory(category, genre);
    //    //    var audioViewModels = Mapper.Map<IEnumerable<TAudiosViewModel>>(audios);

    //    //    HttpContext.Session.SetString("Category", category);

    //    //    if (genre != null)
    //    //    {
    //    //        HttpContext.Session.SetString("Genre", genre);
    //    //    }

    //    //    return audioViewModels;
    //    //}

    //    //protected virtual TAudioViewModel Audio<TAudioViewModel>(int id)
    //    //    where TAudioViewModel : AudioViewModel
    //    //{
    //    //    var audioViewModel = Mapper.Map<TAudioViewModel>(_audioService.GetAudio(id));

    //    //    return audioViewModel;
    //    //}

    //    //public void CreatePlaylist(int id)
    //    //{
    //    //    var createPlaylistViewModel = new CreatePlaylistViewModel
    //    //    {
    //    //        GenresSelectList = new MultiSelectList(_genreService.GetGenres(), "Id", "Name"),
    //    //        AudioViewModel = Mapper.Map<TAudio, AudioViewModel>(_audioService.GetAudio(id))
    //    //    };

    //    //    return PartialView("_CreatePlaylist", createPlaylistViewModel);
    //    //}

    //    //protected virtual IEnumerable<TReportsViewModel> Reports<TReportsViewModel>(int pageNumber = 1)
    //    //    where TReportsViewModel : ReportsViewModel
    //    //{
    //    //    var audiosReport = _reportService.GetReports();

    //    //    var ReportsViewModels = Mapper.Map<IEnumerable<TReportsViewModel>>(audiosReport);
    //    //    var ReportsViewModelPages = new List<TReportsViewModel>(ReportsViewModels, pageNumber, DomainModels.Audio.PageSize);

    //    //    return ReportsViewModelPages;
    //    //}

    //    protected virtual TReportCreateViewModel RequestDeletion<TReportCreateViewModel>(int id, SelectList selectList)
    //        where TReportCreateViewModel : ReportCreateViewModel, new()
    //    {
    //        return new TReportCreateViewModel
    //        {
    //            ReportId = _audioService.GetAudio(id).Id,
    //            OtherAudios = selectList
    //        };
    //    }

    //    protected virtual void RequestDeletion<TReportCreateViewModel>(TReportCreateViewModel reportCreateViewModel, TReport report)
    //        where TReportCreateViewModel : ReportCreateViewModel
    //    {
    //        report.Reason = reportCreateViewModel.Reason;
    //        report.AdditionalDetails = reportCreateViewModel.AdditionalDetails;
    //        //report.Audio = _audioService.GetAudio(reportCreateViewModel.ReportId);

    //        _reportService.Add(report);

    //        ViewBag.UserMessage = "Thank you for the report, our team of ninja's will look into it.";
    //    }
    //}
}