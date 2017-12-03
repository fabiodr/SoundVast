//using System;
//using System.Collections.Generic;
//using System.Linq;
//using SoundVast.Components.Comment.Models;

//namespace SoundVast.Components.Comment
//{
//    public static class CommentFilter
//    {
//        public static IQueryable<T> ForAudio<T>(this IQueryable<T> source, int audioId) where T : Comment
//        {
//            return source.Where(x => x.Audio.Id == audioId);
//        }
//    }
//}