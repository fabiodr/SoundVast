using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre;
using SoundVast.Components.Rating;
using SoundVast.Components.User;
using SoundVast.Components.LiveStream.Models;

namespace SoundVast.Components.LiveStream
{
    public class StreamDataPayload : GraphQL.Relay.Types.Temp.NodeGraphType<StreamData>
    {
        private readonly IStreamDataService _streamDataService;

        public StreamDataPayload(IStreamDataService streamDataService)
        {
            _streamDataService = streamDataService;

            Name = nameof(StreamData);

            Id(x => x.Id);
            Field(x => x.LiveStreamUrl);
            Field(x => x.ContentType, nullable: true);
            Field(x => x.Bitrate, nullable: true);
        }

        public override StreamData GetById(string id)
        {
            return _streamDataService.GetStreamData(int.Parse(id));
        }
    }
}
