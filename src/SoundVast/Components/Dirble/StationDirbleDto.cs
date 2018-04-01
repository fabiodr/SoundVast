using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SoundVast.Components.Genre;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Dirble
{
    public class StationDirbleDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Country { get; set; }
        public string Website { get; set; }
        public ImageDirbleDto Image { get; set; }
        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }
        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }
        public string Slug { get; set; }
        public string Twitter { get; set; }
        public string Facebook { get; set; }
        [JsonProperty("total_listeners")]
        public int TotalListeners { get; set; }
        public IEnumerable<GenreDirbleDto> Categories { get; set; }
        public IEnumerable<StreamDirbleDto> Streams { get; set; }
    }
}
