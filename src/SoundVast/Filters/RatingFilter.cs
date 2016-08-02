﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SoundVast.Models.CommentModels;
using SoundVast.Models.IdentityModels;

namespace SoundVast.Filters
{
    public static class RatingFilter
    {
        public static CommentRating SingleExistingComment(this IEnumerable<CommentRating> source, int commentId, string userId)
        {
            return source.SingleOrDefault(x => x.Comment.Id == commentId && x.User.Id == userId);
        }

        //public static TRating SingleExistingAudio<TRating>(this IEnumerable<TRating> source, int audioId, string userId)
        //    where TRating : Rating
        //{
        //    return source.SingleOrDefault(x => x.Audio.Id == audioId && x.User.Id == userId);
        //}
    }
}