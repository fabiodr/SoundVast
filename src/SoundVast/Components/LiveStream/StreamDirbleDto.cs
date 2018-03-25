using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.LiveStream
{
    public class StreamDirbleDto
    {
        public string Stream { get; set; }
        public int? Bitrate { get; set; }
        [JsonProperty("content_type")]
        public string ContentType { get; set; }
        public int Status { get; set; }
        public int Listeners { get; set; }
    }
}
