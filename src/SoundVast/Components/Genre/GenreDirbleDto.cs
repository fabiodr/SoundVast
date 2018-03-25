using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Genre
{
    public class GenreDirbleDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }
        public string Ancestry { get; set; }
        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }
        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }
        public string Position { get; set; }
        public string Urlid { get; set; }
        public IEnumerable<GenreDirbleDto> Children { get; set; }
    }
}
