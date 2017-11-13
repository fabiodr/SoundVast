using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SoundVast.CustomHelpers;

namespace SoundVast.Components.Audio
{
    public interface IRatable
    {
        int Likes { get; set; }
        int Dislikes { get; set; }
    }

    public class AudiosViewModel : IRatable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; } 
        public int UniqueViews { get; set; }
        public int LevenshteinScore { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }

    public class AudioViewModel : IRatable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string UserName { get; set; }
        public int UniqueViews { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }

        [Display(Name = @"Upload Date")]
        [DisplayFormat(ConvertEmptyStringToNull = true, DataFormatString = "{0:dd'/'MMMM'/'yyyy}")]
        public DateTimeOffset UploadDate { get; set; }
    }

    public class CreatePlaylistViewModel
    {
        public string Name { get; set; }
        public MultiSelectList GenresSelectList { get; set; }

        [Required]
        [Display(Name = @"Genre Tags")]
        [HiddenInput(DisplayValue = false)]
        public int[] SelectedGenreIds { get; set; }

        //public AudioViewModel AudioViewModel { get; set; }
    }

    public class PlaylistViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string UserName { get; set; }
    }

    //public class AudioViewModel
    //{
    //    [HiddenInput(DisplayValue = false)]
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public string Artist { get; set; }
    //    public ImageViewModel ImageViewModel { get; set; }
    //}

    public class GenreViewModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }

    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
    }

    //public class ImageViewModel
    //{
    //    public int Id { get; set; }
    //    public virtual string Name { get; set; }
    //    public virtual string ImagePath { get; }
    //}

    //public class ReportsViewModel : AudiosViewModel
    //{
    //    public string Artist { get; set; }
    //    public string Reason { get; set; }
    //    public string AdditionalDetails { get; set; }
    //}

    //public class ReportCreateViewModel
    //{
    //    public int Id { get; set; }
    //    public string Reason { get; set; }
    //    public int ReportId { get; set; }
    //    public SelectList OtherAudios { get; set; }

    //    [RequiredIf("Reason == 'Other'", ErrorMessage = @"Additional details must be entered")]
    //    public string AdditionalDetails { get; set; }
    //}

    public class EditAudioViewModel : IRatable
    {
        public int Id { get; set; }
        [Required]
        [StringLength(160)]
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public int UniqueViews { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public int AudioId { get; set; }
        public int[] SelectedGenreIds { get; set; }
        public MultiSelectList GenresSelectList { get; set; }
    }
}