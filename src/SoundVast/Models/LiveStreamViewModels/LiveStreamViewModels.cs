using SoundVast.Models.AudioViewModels;

// ReSharper disable UnassignedGetOnlyAutoProperty, set in auto mapper

namespace SoundVast.Models.LiveStreamViewModels
{
    public class LiveStreamsViewModel : AudiosViewModel
    {
        public string AudioUrl { get; set; }
        public string Image { get; set; }
    }

    public class LiveStreamViewModel : AudioViewModel
    {
        public string WebsiteUrl { get; set; }
        public string AudioUrl { get; set; }
    }
}