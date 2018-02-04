using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.GraphQl;
using SoundVast.Components.Tag;
using SoundVast.Components.User;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.LiveStream
{
    public class SaveLiveStreamPayload : MutationPayloadGraphType
    {
        private readonly ILiveStreamService _liveStreamService;
        private readonly ITagService _tagService;

        public SaveLiveStreamPayload(ILiveStreamService liveService, ITagService tagService)
        {
            _liveStreamService = liveService;
            _tagService = tagService;

            Name = nameof(SaveLiveStreamPayload);

            Field<NonNullGraphType<LiveStreamPayload>>("liveStream");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var coverImageUrl = inputs.Get<string>("coverImageUrl");
            var name = inputs.Get<string>("name");
            var liveStreamUrl = inputs.Get<string>("liveStreamUrl");
            var websiteUrl = inputs.Get<string>("websiteUrl");
            var genreIds = inputs.Get("genreIds", new object[0]).Cast<int>().ToList();
            var tags = inputs.Get("tags", new object[0]).Select(x => x.As<Dictionary<string, object>>().ToObject<TagInput>());
            var user = context.UserContext.As<Context>().CurrentUser;
            var liveStream = new Models.LiveStream
            {
                CoverImageUrl = coverImageUrl,
                Name = name,
                LiveStreamUrl = liveStreamUrl,
                WebsiteUrl = websiteUrl,
                UserId = user.Id
            };

            foreach (var genreId in genreIds)
            {
                liveStream.AudioGenres.Add(new AudioGenre { GenreId = genreId });
            }

            foreach (var tag in tags)
            {
                Tag.Tag tagModel;

                if (tag.Tag != null)
                {
                    tagModel = new Tag.Tag
                    {
                        Name = tag.Tag
                    };
                }
                else if (tag.Id.HasValue)
                {
                    var existingTag = _tagService.GetTag(tag.Id.Value);

                    tagModel = existingTag;
                }
                else
                {
                    throw new Exception("A tag id or name must be supplied");
                }

                if (liveStream.AudioTags.All(x => x.Tag.Id != tagModel.Id))
                {
                    liveStream.AudioTags.Add(new AudioTag { Tag = tagModel });
                }
            }

            _liveStreamService.Add(liveStream);

            return new
            {
                liveStream
            };
        }
    }
}
