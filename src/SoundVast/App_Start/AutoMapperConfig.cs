using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using System.Linq.Expressions;
using SoundVast.CustomHelpers;
using SoundVast.Models.AudioViewModels;
using SoundVast.Models.CommentViewModels;
using SoundVast.Models.FileStreamModels;
using SoundVast.Models.FileStreamViewModels;
using SoundVast.Models.IdentityModels;
using SoundVast.Models.LiveStreamModels;
using SoundVast.Models.LiveStreamViewModels;
using SoundVast.Models.QuoteViewModels;
using SoundVast.Models.UserViewModels;
using SoundVast.ServiceLayer;
using SoundVast.Models.CommentModels;

namespace SoundVast
{
    public class AutoMapperConfiguration : Profile
    {
        public static MapperConfiguration Config;

        private readonly IAzureConfig _azureConfig;

        public AutoMapperConfiguration(IAzureConfig azureConfig)
        {
            _azureConfig = azureConfig;
            Initialize();
        }

        public void Initialize()
        {
            Config = new MapperConfiguration(x =>
            {
                x.IgnoreUnmapped();

                x.CreateMap<Quote, QuoteViewModel>();
                x.CreateMap<Comment, CommentBodyViewModel>();
                x.CreateMap<Comment, CommentListViewModel>();

                x.CreateMap<Comment, CommentViewModel>()
                    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                    .ForMember(vm => vm.ReplyViewModels, m => m.MapFrom(z => z.Replies))
                    .ForMember(vm => vm.OriginalCommentUserName, m => m.MapFrom(z => z.OriginalComment.User.UserName))
                    .ForMember(vm => vm.OriginalCommentId, m => m.MapFrom(z => z.OriginalComment != null ? z.OriginalComment.Id : z.Id));

                x.CreateMap<Category, CategoryViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri))
                    .ReverseMap();

                x.CreateMap<AudioGenre, GenreViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.Genre.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<Playlist, Models.AudioViewModels.PlaylistViewModel>()
                    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<Playlist, Models.UserViewModels.PlaylistViewModel>()
                    .ForMember(vm => vm.UserName, m => m.MapFrom(z => z.User.UserName))
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<LiveStream, LikedLiveStreamViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<Playlist, LikedPlaylistViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<Audio, SimilarFileStreamViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<FileStream, LikedFileStreamViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<FileStream, OriginalFileStreamViewModel>()
                    .ForMember(vm => vm.GenreViewModels, m => m.MapFrom(z => z.Genres))
                    .ForMember(vm => vm.BuyLinkViewModels, m => m.MapFrom(z => z.Links))
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<FileStream, FileStreamsViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<FileStream, AudiosViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<FileStream, OtherFileStreamSelectListViewModel>()
                    .ForMember(vm => vm.NameAndArtist, m => m.MapFrom(src => src.Name + src.Artist));

                x.CreateMap<Link, BuyLinkViewModel>()
                    .ReverseMap();

                //x.CreateMap<Report, ReportsViewModel>()
                //    .IgnoreAllNonExisting()
                //    .ForMember(vm => vm.Id, m => m.MapFrom(src => src.F.Id))
                //    .ForMember(vm => vm.Name, m => m.MapFrom(src => src.Audio.Name))
                //    .ForMember(vm => vm.ImageViewModel, m => m.MapFrom(z => z.Audio.ImageFile))
                //    .ForMember(vm => vm.UniqueViews, m => m.MapFrom(src => src.Audio.UniqueViews))
                //    .ForMember(vm => vm.Likes, m => m.MapFrom(src => src.Audio.Likes))
                //    .ForMember(vm => vm.Dislikes, m => m.MapFrom(src => src.Audio.Dislikes));

                x.CreateMap<FileStreamReport, ReportFileStreamDisplayViewModel>();
                //.ForMember(vm => vm.ReportFileStreamsViewModel, m => m.MapFrom(z => (FileStream)z.Audio));

                x.CreateMap<LiveStream, LiveStreamsViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));

                x.CreateMap<LiveStream, LiveStreamViewModel>()
                    .ForMember(vm => vm.ImagePath, m => m.MapFrom(src => _azureConfig.ContainerImage.GetBlockBlobReference(src.ImageFile.Name).Uri.AbsoluteUri));
            });

            Config.AssertConfigurationIsValid();
        }
    }
}