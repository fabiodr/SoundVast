using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using AutoMapper;
using ExpressiveAnnotations.Attributes;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.Web;
using SoundVast;
using SoundVast.Utilities;
using SoundVast.CustomHelpers;
using SoundVast.Models.AudioViewModels;

namespace SoundVast.Models.FileStreamViewModels
{
    public class FileStreamsViewModel : AudiosViewModel
    {
        public string Artist { get; set; }
    }

    public class BuyLinkViewModel
    {
        public int Id { get; set; }

        [Display(Name = @"Buy Link(s)")]
        [DisplayFormat(ConvertEmptyStringToNull = true)]
        public string LinkUrl { get; set; }
    }

    public class OriginalFileStreamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public string Lyrics { get; set; }
        public string ImagePath { get; set; }

        [Display(Name = @"Release Date")]
        [DisplayFormat(ConvertEmptyStringToNull = true, DataFormatString = "{0:dd'/'MMMM'/'yyyy}")]
        public DateTime? ReleaseDate { get; set; }

        [Display(Name = @"Buy Link(s)")]
        public ICollection<BuyLinkViewModel> BuyLinkViewModels { get; set; }

        [Display(Name = @"Genres")]
        public ICollection<GenreViewModel> GenreViewModels { get; set; }
    }

    public class ReportFileStreamDisplayViewModel
    {
        public int Id { get; set; }
        public string Reason { get; set; }
        public string AdditionalDetails { get; set; }
        //public ReportsViewModel ReportFileStreamsViewModel { get; set; }
    }

    public class SimilarFileStreamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string ImagePath { get; set; }
    }

    public class OtherFileStreamSelectListViewModel
    {
        public int Id { get; set; }
        public string NameAndArtist { get; set; }
    }
}