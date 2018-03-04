using SixLabors.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class Image
    {
        public static string PlaceholderImageName = "SoundVast.svg";
        public static IDictionary<string, Size> CoverImageSizes = new Dictionary<string, Size>
        {
            { "w=280", new Size() { Width = 280 } },
            { "w=415", new Size() { Width = 415 } },
        };

        public string Dimention { get; set; }
        public string ImageUrl { get; set; }
    }
}
