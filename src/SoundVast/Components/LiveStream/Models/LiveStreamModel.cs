using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio.Models;

namespace SoundVast.Components.LiveStream.Models
{
    public class LiveStreamModel : AudioModel
    {
        public string WebsiteUrl { get; set; }
        public string AudioUrl { get; set; }

        public LiveStreamModel()
        {

        }

        //public LiveStreamModel(string userId)
        //    : base(userId)
        //{

        //}
    }
}
