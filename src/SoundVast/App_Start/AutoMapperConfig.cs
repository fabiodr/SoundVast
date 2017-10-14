using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using System.Linq.Expressions;
using SoundVast.Storage.CloudStorage;

namespace SoundVast
{
    public class AutoMapperConfiguration : Profile
    {
        public static MapperConfiguration Config { get; set; }
        private readonly ICloudStorage _cloudStorage;

        public AutoMapperConfiguration(ICloudStorage cloudStorage)
        {
            _cloudStorage = cloudStorage;

            Map();
        }

        public void Map()
        {
           // Func<string, CloudStorageProperties> imageFileProperties = fileName => _cloudStorage.GetBlob(CloudStorageType.Image, fileName).FileProperties;

            Config = new MapperConfiguration(x =>
            {
                //x.IgnoreUnmapped();

                //x.CreateMap<QuoteModel, QuoteViewModel>();
                //x.CreateMap<CommentModel, CommentBodyViewModel>();
                //x.CreateMap<CommentModel, CommentListViewModel>();

                //x.CreateMap<CommentModel, CommentViewModel>()
                //    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                //    .ForMember(vm => vm.ReplyViewModels, m => m.MapFrom(z => z.Replies))
                //    .ForMember(vm => vm.OriginalCommentUserName, m => m.MapFrom(z => z.OriginalComment.User.UserName))
                //    .ForMember(vm => vm.OriginalCommentId, m => m.MapFrom(z => z.OriginalComment != null ? z.OriginalComment.Id : z.Id));

                //x.CreateMap<CategoryModel, CategoryViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri))
                //    .ReverseMap();

                //x.CreateMap<AudioGenreModel, GenreViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.Genre.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<PlaylistModel, PlaylistViewModel>()
                //    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<PlaylistModel, PlaylistViewModel>()
                //    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<LiveStream, LikedLiveStreamViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<PlaylistModel, LikedPlaylistViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<Audio, SimilarFileStreamViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<FileStreamModel, LikedFileStreamViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<FileStreamModel, OriginalFileStreamViewModel>()
                //    .ForMember(vm => vm.GenreViewModels, m => m.MapFrom(z => z.Genres))
                //    .ForMember(vm => vm.BuyLinkViewModels, m => m.MapFrom(z => z.Links))
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<FileStreamModel, FileStreamsViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<FileStreamModel, AudiosViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<FileStreamModel, OtherFileStreamSelectListViewModel>()
                //    .ForMember(vm => vm.NameAndArtist, m => m.MapFrom(src => src.Name + src.Artist));

                //x.CreateMap<LinkModel, BuyLinkViewModel>()
                //    .ReverseMap();

                ////x.CreateMap<Report, ReportsViewModel>()
                ////    .IgnoreAllNonExisting()
                ////    .ForMember(vm => vm.Id, m => m.MapFrom(src => src.F.Id))
                ////    .ForMember(vm => vm.Name, m => m.MapFrom(src => src.Audio.Name))
                ////    .ForMember(vm => vm.ImageViewModel, m => m.MapFrom(z => z.Audio.ImageFile))
                ////    .ForMember(vm => vm.UniqueViews, m => m.MapFrom(src => src.Audio.UniqueViews))
                ////    .ForMember(vm => vm.Likes, m => m.MapFrom(src => src.Audio.Likes))
                ////    .ForMember(vm => vm.Dislikes, m => m.MapFrom(src => src.Audio.Dislikes));

                //x.CreateMap<FileStreamReportModel, ReportFileStreamDisplayViewModel>();
                ////.ForMember(vm => vm.ReportFileStreamsViewModel, m => m.MapFrom(z => (FileStream)z.Audio));

                //x.CreateMap<LiveStream, LiveStreamsViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));

                //x.CreateMap<LiveStream, LiveStreamViewModel>()
                //    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => imageFileProperties(src.ImageFile.Name).Uri.AbsoluteUri));
            });

            Config.AssertConfigurationIsValid();
        }
    }
}