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
using SoundVast.Components.Song;
using SoundVast.Components.Song.Models;
using SoundVast.Components.User;

namespace SoundVast.Components.Account
{
    public class AccountPayload : ObjectGraphType<ApplicationUser>
    {
        public AccountPayload(ISongService songService)
        {
            Name = nameof(ApplicationUser);

            Field<IdGraphType>("Id");
            Field(x => x.UserName);
            Field(x => x.Email);
            Field(x => x.EmailConfirmed);
            Field(x => x.ContributionScore).Description("The score that the user has earned from contributing");
            Field<ListGraphType<SongPayload>>("uploads", "The songs that the user has uploaded",
                resolve: c => songService.GetAudiosForUser(c.Source.Id));
            Field<ListGraphType<SongPayload>>("likedSongs", "The songs that the user has liked",
                resolve: c => songService.GetUserLikedAudios(c.Source.Id));
        }
    }
}
